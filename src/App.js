import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import './index.css'; 
import { useRef } from 'react';
function App() {
  const projectsRef=useRef(null);
  const contactRef=useRef(null);
  return (
    <main>
    <Header projectsRef={projectsRef} contactRef={contactRef}/>
    <About/>
    <Projects projectsRef={projectsRef}/>
    <Contact contactRef={contactRef}/>



    </main>
  );
}

export default App;
