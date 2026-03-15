import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "./Projects";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default Home;
