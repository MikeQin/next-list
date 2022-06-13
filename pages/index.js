import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Next List | Home</title>
      <meta name="keywords" content="next list"/>
    </Head>
    <div className={styles.title}>
      <h1>Welcome to Next List</h1>
      <p className={styles.text}>Welcome to Next List! The app shows how to use Next.js to 
      build a React app quickl at no time. Welcome to Next List! The app shows how to use Next.js to 
      build a React app quickl at no time. Welcome to Next List! The app shows how to use Next.js to 
      build a React app quickl at no time.</p>
      <p className={styles.text}>Welcome to Next List! The app shows how to use Next.js to 
      build a React app quickl at no time. Welcome to Next List! The app shows how to use Next.js to 
      build a React app quickl at no time.</p>
      <Link href="/users"><a className={styles.btn}>See Users List</a></Link>
    </div>
    </>
  )
}
