import React, { useState } from 'react';
import axios from 'axios';
import Map from './Map';

function LatLong() {
  const [location, setLocation] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  async function findLocation() {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${searchQuery}&format=json`;
    const result = await axios.get(API);
    setLocation(result.data[0]);
  } 

  const handleSearch  = (e) => {setSearchQuery(e.target.value);}

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


// --------------------------------------------------------------------------
import React, { useEffect } from 'react';
import axios from 'axios';

function Map(props) {
  const { lat, lon } = props;

  useEffect(() => {
    async function fetchData() {
      const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
      const result = await axios.get(API);
      console.log(result.data);
      // do something with the result
    }
    fetchData();
  }, [lat, lon]);

  return (
    <div>
      {/* display map */}
    </div>
  );
}

export default Map;
