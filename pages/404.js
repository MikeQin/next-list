import Link from "next/link";
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(()=> {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Next List | Not Found</title>
        <meta name="keywords" content="next list 404"/>
      </Head>
      <div className="not-found">
        <h1>Oooops...</h1>
        <h2>That page cannot be found</h2>
        <p>Go back to the <Link href="/">Homepage</Link></p>
      </div>
    </>
  );
}
 
export default NotFound;