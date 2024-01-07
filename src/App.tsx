import Navbar from "./components/navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import "./styles/_global.scss";
import "./styles/index.scss";
function App() {
  return (
    <div className="app">
      <Navbar />

      <Home />

      <About />

      <Experience />
    </div>
  );
}

export default App;
