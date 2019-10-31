import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import CenterDetails from '../CenterDetails/CenterDetails';
import Map from '../Map/Map';
import { getCenters } from '../apiCalls/apiCalls';
import './App.css';

const App = () => {
  const [centers, setCenters] = useState([])
  const [isCenterSelected, selectCenter] = useState(true);


  // const fetchCenters = async () => {
  //   const response = await getCenters();
  //   console.log(response)
  //   const data = await response.json()
  //   console.log(data)
  // }

  // useEffect(() => {
  //   fetchCenters();
  // }, []);


  return (
    <main className="App">
      <Header />
      {!isCenterSelected ? 
      <Map />
      :
      <CenterDetails />
      }
    </main>
  );
}

export default App;
