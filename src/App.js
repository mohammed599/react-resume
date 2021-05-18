import "./App.css";
import Info from "./Components/Info";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";

function App() {
  return (
    <div className="App">
      <Info />
      <div className="main">
        <About />
        <br />
        <Skills />
        <br />
        <Education />
        <br />
        <Projects />
      </div>
    </div>
  );
}

export default App;
