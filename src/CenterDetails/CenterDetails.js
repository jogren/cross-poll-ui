import React, { useState, useEffect } from 'react';
import { getCenterStats } from '../apiCalls/apiCalls';
import './CenterDetails.css';

const CenterDetails = () => {
  const [searchLovedOne, setSearchLovedOne] = useState("")
  const [inDemandItems, setInDemandItems] = useState({})

  const fetchCenterStats = async () => {
    const data = await getCenterStats();
    setInDemandItems(data)
  }

  useEffect(() => {
    fetchCenterStats();
  }, []);


  console.log(inDemandItems)
  return(
    <section>
      <h1>Center Details</h1>
      <form>
        <label>
          <input 
            type="text"
            name="searchLovedOne"
            value={searchLovedOne}
            onChange={(e) => setSearchLovedOne(e.target.value)}
          />
        </label>
      </form>
    </section>
  )
}

export default CenterDetails;
