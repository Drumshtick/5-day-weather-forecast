import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import DayList from '../components/dayList/DayList'
import useApplicationData from '../hooks/useApplicationData';

export default function Home() {
  const { forecast } = useApplicationData();


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
