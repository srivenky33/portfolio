
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Academics } from './components/Academics/Academics';
import { Skills } from './components/Skills/Skills';

function App() {
  return (<div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience />
      <Academics/>
      <Skills/>
    </div>);
}

export default App;
