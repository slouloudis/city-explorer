import React from 'react'
import axios from 'axios'
import { useState } from 'react'


function Map(props) {

  const { lat, lon } = props;

  async function fetchData() {
  const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${lat},${lon}&format=json`
  const result = await axios.get(API);
      console.log(result.data);
  }
  fetchData();
  return (
    <div>
      <img src={result.data}></img>
    </div>
  )
}

export default Map;