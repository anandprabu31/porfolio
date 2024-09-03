
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
// import Welcome2 from './Components/welcome2';
import Welcome from './Components/Welcome';

function App() {
  return (
    
    <div className="App" style={{ backgroundColor: '#37faa5', minHeight: '100vh' }}>
      <Welcome/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      {/* <Welcome2/> */}
    </div>
    
  );
}

export default App;
