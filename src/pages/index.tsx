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
    <div>
      <main>
        <Image src={logo} alt="logo" quality={100} />

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={avatar} alt="avatares" quality={100} />
          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder="Qual nome do seu bolão" />
          <button type="submit">Criar meu bolão</button>
        </form>

        <p>
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas.
        </p>

        <div>
          <div>
            <Image src={icon} alt="icon-checked" />
            <div>
              <span>+2.034</span>
              <span>Bolões Criados</span>
            </div>
          </div>

          <div>
            <Image src={icon} alt="icon-checked" />
            <div>
              <span>+192.847</span>
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
