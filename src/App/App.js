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
    setCenters(allCenters)
  }

  useEffect(() => {
    fetchCenters();
  }, []);


  console.log(centers)
  return (
    <main className="App">
      <CurrentCenterContext.Provider value={{ reliefCenter, setreliefCenter }}>
        <Header />
        {!isCenterSelected ? 
          <Map centers={centers}/>
        :
          <CenterDetails />
        }
    </CurrentCenterContext.Provider>
    </main>
  );
}

export default App;
