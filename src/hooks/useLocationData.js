import { useEffect, useState } from 'react';


export default function useLocationData() {
  const [ location, setLocation ] = useState({
    lat: 0,
    long: 0,
  });


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
    }
  }, []);
  
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
  return {
    location
  };
};

