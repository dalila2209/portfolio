import React from 'react';
import './../App.css';

const Footer: React.FC = () => {
    return (
        <footer className='footer-class rounded-t-lg'>
            <p>© All rights reserved ~ created using React</p>
            <div className="footer-links">
                <a
                    href="https://www.iubenda.com/privacy-policy/44862765"
                    className="iubenda-black iubenda-noiframe iubenda-embed"
                    title="Privacy Policy"
                >
                    Privacy Policy
                </a>
                <a
                    href="https://www.iubenda.com/privacy-policy/44862765/cookie-policy"
                    className="iubenda-black iubenda-noiframe iubenda-embed"
                    title="Cookie Policy"
                >
                    Cookie Policy
                </a>
            </div>
        </footer>
    )
}

export default Footer;
