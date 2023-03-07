import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Buffer } from 'buffer'


function Map(props) {

  const [map, setMap] = useState(null)
  
  const { lat, lon } = props;


  async function fetchData() {
      const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${lat},${lon}&format=png&zoom=11`
      const result = await axios.get(API, {
        responseType: 'arraybuffer' 
      });
      console.log(Buffer.from(result.data, 'binary').toString('base64'));
      setMap(Buffer.from(result.data, 'binary').toString('base64'))
  }

  useEffect(function () {
    fetchData()
  }, [])
  return (
    <div>
      <img src={`data:image/png;base64, ${map}`} alt="test" />
    </div>
  )
}

export default Map;