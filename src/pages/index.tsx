interface HomeProps {
  count: number,
}

export default function Home(props: HomeProps) {
  return (
    <>
      <h1>Hello TypeScript</h1>
      <p>teste</p>
      <h3>{props.count}</h3>
    </>
  );
}

export const getServerSideProps = async () => {
  const request = await fetch("http://localhost:4444/pools/count");
  const response = await request.json();
  console.log(response);

  return {
    props: {
      count: response.countPool,
    },
  };
};
