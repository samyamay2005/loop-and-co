import "./App.css";
import { sections } from "./content";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Join from "./components/Join";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <main>
        {sections.map((s) => (
          <Section key={s.id} {...s} />
        ))}
        <Join />
      </main>
      <Footer />
    </>
  );
}