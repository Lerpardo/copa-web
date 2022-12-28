interface HomeProps {
  count: number;
}

import Image from "next/image";
import appPreview from "../assets/aplicacao-trilha-ignite.png";
import logo from "../assets/logo.svg";
import avatar from "../assets/avatares.png";
import icon from "../assets/icon.svg";

export default function Home(props: HomeProps) {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logo} alt="logo" />

        <h1 className="mt-14 text-white-500 text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={avatar} alt="avatares" />
          <strong className="text-gray-100">
            <span className="text-ignite-500">+12.592</span> pessoas já estão
            usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input
            type="text"
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
            required
            placeholder="Qual nome do seu bolão?"
          />
          <button
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-white-700"
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas.
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={icon} alt="icon-checked" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.034</span>
              <span>Bolões Criados</span>
            </div>
          </div>
          <div className="w-px h-14 bg-gray-600"/>
          <div className="flex items-center gap-6">
            <Image src={icon} alt="icon-checked" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+192.847</span>
              <span>Palpites Enviados</span>
            </div>
          </div>
        </div>
      </main>
      <Image src={appPreview} alt="appPreview" quality={100} />
      <h3>{props.count}</h3>
    </div>
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
