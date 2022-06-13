import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
  const userApiUrl = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(userApiUrl);
  const data = await response.json();

  return {
    props: { users: data }
  }
};

const List = ({ users }) => {
  return (
    <>
      <Head>
        <title>Next List | Users</title>
        <meta name="keywords" content="next list" />
      </Head>
      <div>
        <h1>All Users</h1>
        { users.map(user => (
          <Link href={"/users/"+user.id} key={user.id}>
            <a className={styles.single}>
              <h3>{ user.id }. { user.name }</h3>
            </a>
          </Link>
        )) }
      </div>
    </>
  );
}

export default List;