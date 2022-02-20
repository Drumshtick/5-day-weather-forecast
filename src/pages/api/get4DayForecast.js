import axios from 'axios';
const NodeCache = require( "node-cache" );
const cache = new NodeCache( { stdTTL: 1800 } );

const get4DayForecast = async (req, res) => {
  return new Promise((resolve, reject) => {
    if (!req.query) {
      console.log('Request to get4Day failed: missing params');
      res.setHeader('Content-Type', 'application/json');
      res.status(400).json({ 'error': 'missing coords'});
      reject("Missing params");
    }
    const { lat, long } = req.query;
    const coordKey = `${lat},${long}`;
  
    const weatherData = cache.get(coordKey);
    if ( !weatherData ) {
      console.log("Making call to openWeather....");
      const openWeatherURL = `
      ${process.env.OPEN_WEATHER_API_BASE}lat=${lat}&lon=${long}&appid=${process.env.OPEN_WEATHER_API_KEY}
      `;
      axios.get(openWeatherURL)
      .then(response => {
        let success = cache.set(coordKey, response.data);
        if ( success ) console.log("cache set too: ", coordKey)
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(response.data);
        resolve();
      })
      .catch(err => {
        console.log("Error in getting openWeather data(4Day): ", err.message);
        res.setHeader('Content-Type', 'application/json');
        res.status(400).json({ 'error': err.message});
        reject("Error in getting openWeather data(4Day)")
      });
    }
    if ( weatherData ) {
      console.log("Found data in cache for: ", coordKey)
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(weatherData);
      resolve();
    }
  });
};

export default get4DayForecast;
