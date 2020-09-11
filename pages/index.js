import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>prbsas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>prbsas·</h1>

        <p className={styles.description}>
          <code className={styles.code}>is being updated.</code>
        </p>
      </main>
    </div>
  );
}
