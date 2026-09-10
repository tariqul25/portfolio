import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { Navbar } from './components/navigation/Navbar';
import { CursorEffect } from './components/ui/CursorEffect';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { ShopifyExpertise } from './components/sections/ShopifyExpertise';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Expertise } from './components/sections/Expertise';
import { TechStack } from './components/sections/TechStack';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import './index.css';

function App() {
  return (
    <>
      <ScrollProgressBar />
      <CursorEffect />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <ShopifyExpertise />
        <Experience />
        <Education />
        <Expertise />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
