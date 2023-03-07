import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Map from '../Components/Map'


function LatLong() {
  const [location, setLocation] = useState({});
  const [searchQuery, setsearchQuery] = useState("");

  async function findLocation() {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${searchQuery}&format=json`;
    const result = await axios.get(API);
    setLocation(result.data[0]);
    console.log(result.data[0]);
    console.log(location.display_name)
  } 

  const handleSearch = (e) => { setsearchQuery(e.target.value);}

  return (
    <div>
      <h2>Lets find out the coordinates of our city:</h2>
      {location.display_name && (
        <p>{location.display_name} is at lat and lon: {location.lat} / {location.lon}</p>
      )}
      <input type="text" placeholder="Enter a city" onChange={handleSearch}></input>
      <button onClick={findLocation}>Explore!</button>
      {location.lat && location.lon && <Map lat={location.lat} lon={location.lon} />}
    </div>
    
  )
}

export default LatLong;

