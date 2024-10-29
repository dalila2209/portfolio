// Modal.tsx
import React, { useState } from 'react';
import musaBasic from './../assets/musa_basic.pdf';
import musaMiddle from './../assets/musa_middle.pdf';

const Modal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        console.log("Opening modal");
        setIsOpen(true);
    };

    const closeModal = () => {
        console.log("Closing modal");
        setIsOpen(false);
    };

    return (
        <>
            <div className='flex justify-center'>
                <button onClick={openModal} className='cv-download-btn py-2 px-4 rounded shadow font-bold'>
                    View my certificates »
                </button>
            </div>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <iframe src={musaBasic} />
                        <iframe src={musaMiddle} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
