import React from 'react';
import Head from 'next/head';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clean Air System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}> <img src="/images/logo.png" alt="Logo" className={styles.logo} />
        <p>Clean Air System</p> <img src="/images/logo.png" alt="second-logo" className={styles.secondLogo}></img>
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.qualiContainer}>
              <img src="/images/quality.png" alt="Qualidade do Ar Logo" className={styles.qualiLogo} />
              <h2>Qualidade do Ar</h2>
            </div>
           
            <p>Dados relacionados à qualidade do ar aqui...</p>
          </div>

          <div className={styles.card}>
            <div className={styles.co2Container}>
              <img src="/images/logo-co2.png" alt="CO2 Logo" className={styles.co2Logo} />
              <h2>CO2</h2>
            </div>
            <p>Dados relacionados ao CO² aqui...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
