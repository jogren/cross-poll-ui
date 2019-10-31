import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import CenterDetails from '../CenterDetails/CenterDetails';
import Map from '../Map/Map';
import { getCenters } from '../apiCalls/apiCalls';
import { CurrentCenterContext } from '../Contexts/CurrentCenterContext';
import './App.css';

const App = () => {
  const [reliefCenter, setreliefCenter] = useState('');
  const [centers, setCenters] = useState([])
  const [isCenterSelected, selectCenter] = useState(false);


  const fetchCenters = async () => {
    const allCenters = await getCenters();
    console.log(allCenters)
    setCenters(allCenters)
  }

  useEffect(() => {
    fetchCenters();
  }, []);


  console.log(reliefCenter)
  return (
    <main className="App">
      <CurrentCenterContext.Provider value={{ reliefCenter, setreliefCenter }}>
        <Header selectCenter={selectCenter}/>
        {!isCenterSelected ? 
          <Map centers={centers} selectCenter={selectCenter}/>
        :
          <CenterDetails />
        }
    </CurrentCenterContext.Provider>
    </main>
  );
}

export default App;
