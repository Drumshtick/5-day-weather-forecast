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
    4: {},
    5: {},
    6: {},
    7: {}
  });
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
    }
  }, []);
  
  useEffect(() => {
    if (location.lat || location.long) {
      axios.get('/api/get4DayForecast', {params: {lat: location.lat, long: location.long}})
      .then(response => {
        const forecastData = response.data;
        forecastData.daily.forEach((day, i) => {
          setForecast(prev => {
            return {
              ...prev,
              [i]: day
            };
          });
        });
      })
      .catch(err => {
        console.log("Error receiving forecast data from backend");
      })
    }
  }, [ location ]);
  
  useEffect(() => {
    if (Object.keys(forecast[7]).length > 0) {
      console.log(forecast);
      setLoading(false);
    }
  }, [ forecast ]);

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
  return { forecast, loading };
};

