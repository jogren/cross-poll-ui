import React, { useState, useEffect, useContext } from 'react';
import { getCenterStats, searchForVisitors } from '../apiCalls/apiCalls';
import { CurrentCenterContext } from '../Contexts/CurrentCenterContext';
import './CenterDetails.css';

const CenterDetails = () => {
  const [searchLovedOne, setSearchLovedOne] = useState("");
  const [foundLovedOne, setFoundLovedOne] = useState("");
  const [inDemandItems, setInDemandItems] = useState({});
  const { reliefCenter, setreliefCenter } = useContext(CurrentCenterContext);

  const fetchCenterStats = async () => {
    const data = await getCenterStats(reliefCenter.id);
    setInDemandItems(data)
  }

  useEffect(() => {
    fetchCenterStats();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let visitors = await searchForVisitors(reliefCenter.id);
    let targetUser = visitors.find(visitor => visitor.name.toLowerCase() === searchLovedOne.toLowerCase());
    console.log(targetUser)
    if(targetUser) {
      setFoundLovedOne(targetUser)
    } else {
      setFoundLovedOne('not found')
    }
    setSearchLovedOne("")
  }

  const handleSearch = (e) => {
    setSearchLovedOne(e.target.value)
    setFoundLovedOne("")
  }

  if (inDemandItems.consumable) {
    let consumableKeys = Object.keys(inDemandItems.consumable)
    let nonConsumableKeys = Object.keys(inDemandItems.non_consumable)

    var consumableList = consumableKeys.map((supply, index) => {
      return <div key={index} className="new-item">
        <p>{supply}</p>
        <p>{inDemandItems.consumable[supply].days_remaining}</p>
      </div>
    })
    var nonConsumableList = nonConsumableKeys.map((supply, index) => {
      return <div key={index} className="new-item">
        <p>{supply}</p>
        <p>{inDemandItems.non_consumable[supply].on_hand}</p>
      </div>
    })
  }


  return(
    <section className="CenterDetails_section">
      <h1>{reliefCenter.name}</h1>
      <form>
        <label>Search for a Loved one:
          <div className="add-item-container">
            <input 
              type="text"
              name="searchLovedOne"
              placeholder="Enter name here..."
              value={searchLovedOne}
              onChange={handleSearch}
            />
            <button disabled={!searchLovedOne} className="submit-new-item" type="submit" onClick={handleSubmit}>
              <img
                className="plus-img"
                alt="plus symbol"
                src={require("../assets/plus-sign.svg")}
              />
            </button>
          </div>
        </label>
      </form>
      <section className="CenterDetails_items">
        <div className="consumable-items-container">
          <div className="consumable-items-header">
            <p>Item</p>
            <p>Days Remaining</p>
          </div>
          { consumableList }
        </div>
        <div className="consumable-item-container">
          <div className="nonConsumable-items-header">
            <p>Item</p>
            <p>On Hand</p>
          </div>
          { nonConsumableList }
        </div>
      </section>
      {foundLovedOne.id && <p>{foundLovedOne.name} is currently a visitor at {foundLovedOne.center.name} at {foundLovedOne.center.addressPrint}</p> }
      {foundLovedOne === 'not found' && <p>Unfortunately he don't have that name in our database.'</p>}
    </section>
  )
}

export default CenterDetails;
