import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      < Header />
      < About />
      < Skills />
      < Work />
      {/* <h1>hello world</h1> */}
    </div>
  );
}

export default App;
