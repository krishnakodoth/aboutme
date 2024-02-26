import './App.css';
import About from './components/About';
import Accomplishment from './components/Accomplishment';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Profile />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Accomplishment />
      <Contact />
    </>
  );
}

export default App;
