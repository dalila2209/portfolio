import React, { useEffect} from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import StudyPortfolio from './components/StudyPortfolio';
import WorkPortfolio from './components/WorkPortfolio';
import CV from './components/CV';
import Footer from './components/Footer';
import './App.css';
import Contact from './components/Contact';
import Button from './components/Button';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetail';
import WorkDetails from './components/WorkDetails';
import Modal from './components/Modal';



const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  }, [location]);
  return null;
};

const Homepage: React.FC = () => {
  
  return (
    <>
      <AboutMe />
      <Modal />
      <WorkPortfolio />
      <StudyPortfolio />
      <CV />
      <Contact />
      <Button />
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className='App min-h-screen'>
        <Header />
        {/*il componente ScrollToSection gestisce lo scroll automatico*/}
        <ScrollToSection />
        <Routes>
          {/* La rotta principale renderizza la homepage con tutte le sezioni */}
          <Route path='/' element={<Homepage />} />
          {/* Rotta per i dettagli di un progetto */}
          <Route path="/project/study/:id" element={<ProjectDetails />} />
          <Route path="/project/work/:id" element={<WorkDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
