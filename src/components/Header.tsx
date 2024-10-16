import React from 'react';
import img from '../assets/header.png'; // il tuo logo
import './../App.css';
import { Link, useNavigate } from 'react-router-dom';


const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleNavClick = (hash: string) => {
    // Naviga prima alla homepage, poi imposta l'hash per scrollare alla sezione corretta
    navigate('/');
    // Usa un timeout breve per assicurarti che la navigazione alla homepage avvenga prima di scrollare
    setTimeout(() => {
      window.location.hash = hash;
    }, 0);
  };

    return (
      <header id='header1' className="h-20 shadow-lg rounded-b-lg">
        <div className="container mx-auto flex items-center justify-between h-full">
          <div className="flex items-center">
            <img
              src={img}
              alt="Logo"
              className="h-14 object-contain shadow-lg transition-transform transform hover:scale-125"
              style={{ maxHeight: '100%', maxWidth: '100%' }}
            />
          </div>
          <nav>
          <ul className="flex space-x-6">
              {/* Usa handleNavClick per navigare alla homepage e scrollare alla sezione */}
              <li>
                <button
                  className='nav-btn text-l font-bold'
                  onClick={() => handleNavClick('#about')}
                >
                  About me
                </button>
              </li>
              <li>
                <button
                  className='nav-btn text-l font-bold'
                  onClick={() => handleNavClick('#portfolio')}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  className='nav-btn text-l font-bold'
                  onClick={() => handleNavClick('#cv')}
                >
                  CV
                </button>
              </li>
              <li>
                <button
                  className='nav-btn text-l font-bold'
                  onClick={() => handleNavClick('#contact')}
                >
                  Contacts
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;