import React, { useState, useEffect } from 'react';
import { getCenterStats } from '../apiCalls/apiCalls';
import './CenterDetails.css';

const CenterDetails = () => {

  const fetchCenterStats = async () => {
    const response = await getCenterStats();
    console.log(response)
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    fetchCenterStats();
  }, []);


  return(
    <section>
      <h1>Center Details</h1>
    </section>
  )
}

export default CenterDetails;
