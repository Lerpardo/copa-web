interface HomeProps {
  count: number,
}

import Image from "next/image";
import appPreview from '../assets/aplicacao-trilha-ignite.png'
export default function Home(props: HomeProps) {
  return (
    <>
      <h1>Hello TypeScript</h1>
      <p>teste</p>
      <Image src={appPreview} alt='appPreview' quality={100}/>
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
