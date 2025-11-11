import Banner from "./components/banner";
import Link from "./components/link/link";

function App() {
  return (
    <>
    <Banner src="./public/assets/imagens/bannerDesktop.png" alt="Luz e Cena" />
    <Link href="/" target="_blank">Acesse nosso site</Link>
    </>
  );
}

export default App;
