import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import DayList from '../components/dayList/DayList'

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>5 Day Weather Forecaster</title>
        <meta name="description" content="See the weather for the next few" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={styles.mainContainer}>
      <DayList />
    </main>
    </div>
  )
}
