import styles from './DayList.module.scss'
import DayListItem from '../dayListItem/DayListItem';

export default function DayList() {
  return (
    <ul className={styles.container}>
      <DayListItem />
      <DayListItem />
      <DayListItem />
      <DayListItem />
      <DayListItem />
    </ul>
  );
};
