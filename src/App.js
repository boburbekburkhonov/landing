import Header from "./component/Header";
import Hero from "./component/Hero";
import Comments from './component/Comments'
import Static from "./component/Static";
import Apa from "./component/Apa";
import Baca from "./component/Baca";
import Last from "./component/Last";
import Footer from "./component/Footer";
import FooterBottom from "./component/FooterBottom";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Comments />
        <Static />
        <Apa />
        <Baca />
        <Last />
        <Footer />
        <FooterBottom />
      </main>
    </>
  );
}

export default App;
