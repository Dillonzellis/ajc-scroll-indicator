import "./App.css";
import { Article } from "./components/article";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

function App() {
  return (
    <>
      <Header />
      <main className="max-width-container">
        <Hero />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </main>
    </>
  );
}

export default App;
