import styles from './DayList.module.scss'
import DayListItem from '../dayListItem/DayListItem';
import getDayOfWeek from '../helpers/getWeekAbbreviation';

export default function DayList(props) {
  const { forecast, loading } = props;
  let forecastDay;
  
  if (!loading) {
    const forecastKeys = Object.keys(forecast)
    forecastDay = forecastKeys.map(( day, i ) => {

      const date = new Date(0);
      date.setSeconds(forecast[day].dt);
      const dayName = getDayOfWeek(date.getDay());

      return (
        <DayListItem
          key={i}
          day={dayName}
          imageIcon={forecast[day].weather[0].icon}
          forecastData={forecast[day]}
          current={i === 0 ? true : false}
        />
      );
    })
  }

  
  return (
    <ul className={styles.container}>
      {!loading && forecastDay}
    </ul>
  );
};


