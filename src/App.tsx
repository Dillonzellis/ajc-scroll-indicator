import "./App.css";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

function App() {
  return (
    <>
      <Header />
      <main className="max-width-container">
        <Hero />
      </main>
    </>
  );
}

export default App;
