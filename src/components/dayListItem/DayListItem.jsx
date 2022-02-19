import styles from './DayListItem.module.scss';
import Image from 'next/image';
export default function DayListItem() {
  return (
    <li className={styles.container}>
      <header className={styles.day}>Mon</header>
      <div className={styles.imgWrapper}>
        <Image
          height={55}
          width={55}
          alt="sunny day"
          src="https://openweathermap.org/img/wn/02d.png"
        />
      </div>
      <footer className={styles.temp}>
        <div className={styles.dayTemp}>27&#176;</div>
        <div className={styles.nightTemp}>18&#176;</div>
      </footer>
    </li>
  );
};
