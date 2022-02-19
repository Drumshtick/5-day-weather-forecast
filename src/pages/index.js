import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import DayList from '../components/dayList/DayList'
import useLocationData from '../hooks/useLocationData';

export default function Home() {
  const { latitude } = useLocationData();

  

  return (
    <div>
      <Head>
        <title>5 Day Weather Forecaster</title>
      </Head>
    <main className={styles.mainContainer}>
      <DayList />
    </main>
    </div>
  )
}
