import axios from 'axios';

const get4DayForecast = async (req, res) => {
  if (!req.query) {
    console.log('Request to get4Day failed: missing params')
    return res.status(400).json({ 'error': 'missing coords'});
  }
  const { lat, long } = req.query;
  const openWeatherURL = `
  ${process.env.OPEN_WEATHER_API_BASE}lat=${lat}&lon=${long}&appid=${process.env.OPEN_WEATHER_API_KEY}
  `;
  console.log(openWeatherURL)
  axios.get(openWeatherURL)
  .then(response => {
    console.log(response.data)
    return res.status(200).json(response.data);
  })
  .catch(err => {
    console.log("Error in getting openWeather data(4Day): ", err.message);
    return res.status(400).json({ 'error': err.message});
  });


}

export default get4DayForecast;
