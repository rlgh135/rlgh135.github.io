import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import "./styles.css";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
