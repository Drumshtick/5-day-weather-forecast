import styles from './DayListItem.module.scss';
import Image from 'next/image';

export default function DayListItem(props) {
  console.log(props)
  const {
    current,
    day,
    imageIcon,
    forecastData
  } = props;
  return (
    <li className={`${styles.container} ${current && styles.current}`}>
      <header className={styles.day}>{day}</header>
      <div className={styles.imgWrapper}>
        <Image
          height={55}
          width={55}
          alt="sunny day"
          src={`https://openweathermap.org/img/wn/${imageIcon}.png`}
        />
      </div>
      <footer className={styles.temp}>
        <div className={styles.dayTemp}>{Number(forecastData.temp.day) - Number(process.env.NEXT_PUBLIC_K_VALUE)}&#176;</div>
        <div className={styles.nightTemp}>{forecastData.temp.night}&#176;</div>
      </footer>
    </li>
  );
};
