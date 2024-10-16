import React, { useEffect, useState } from 'react';
import './../App.css';

const Button: React.FC = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    //funzione per scrollare all'inizio della pagina
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    //mostra o nasconde il bottone in base allo scroll
    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    //aggiungi il listener per lo scroll
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        //rimuovi il listener quando il componenete viene smontato
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);;

    return (
        <div className='fixed bottom-5 right-5'>
            {isVisible && (
                <button 
                    onClick={scrollToTop}
                    className='giallo p-3 rounded-full shadow-lg transition duration-300'
                    >
                        {/* icona freccia su */}
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d="M5 15l7-7 7 7"
                            />
                        </svg>
                    </button>
            )}
        </div>
    );
};

export default Button;