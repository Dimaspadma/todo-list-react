interface IGreetingOwnProps {
  results?: any;
}

export const Greeting: React.FC<IGreetingOwnProps> = ({results}): JSX.Element => {
  console.log(results);
  return (
    <div className='Greeting'>
      <label>{`Hi, World`}</label>
    </div>
  )
}

// Static Generation (SSG)
export const getStaticProps = async () => {
  const res = await fetch('https://randomuser.me/api/');
  const results = await res.json();

  // return { props: {posts} }, the Greeting component 
  // will receive `posts` as prop at a build time
  return {
    props: {
      results,
    }
  }
}