export const getStaticPaths = async () => {
  const userApiUrl = 'https://jsonplaceholder.typicode.com/users';
  const res = await fetch(userApiUrl);
  const data = await res.json();

  const paths = data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  });

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const userApiUrl = 'https://jsonplaceholder.typicode.com/users';
  const res = await fetch(userApiUrl + '/' + id);
  const data = await res.json();

  return {
    props: { user: data }
  }
};

const Details = ({ user }) => {
  return (
    <div>
      <h1>{ user.name }</h1>
      <p>email: { user.email }</p>
      <p>website: { user.website }</p>
      <p>city: { user.address.city }</p>
    </div>
  );
}
 
export default Details;