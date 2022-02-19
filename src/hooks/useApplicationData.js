import { useEffect, useState } from 'react';
import axios from 'axios';


export default function useApplicationData() {
  const [ location, setLocation ] = useState({
    lat: null,
    long: null,
  });

  const [ forecast, setForecast ] = useState({
    0: {},
    1: {},
    2: {},
    3: {},
    4: {}
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
    }
  }, []);
  
  useEffect(() => {
    console.log(location)
    if (location.lat || location.long) {
      axios.get('/api/get4DayForecast')
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log("Error receiving forecast data from backend");
      })
    }
  }, [ location ]);
  
  function handleGeoError(error) {
    console.log("Not Available, Error: ", error.message);
    console.log("Setting lat long to defaults...")
    setLocation({
      lat: process.env.DEFAULT_LAT,
      long: process.env.DEFAULT_LAT
    });
  }
  
  function handleGeoSuccess(position) {
    setLocation({
      lat: position.coords.latitude,
      long: position.coords.longitude
    });
  };
  return { forecast };
};

