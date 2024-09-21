import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="container mx-auto">
        <p className="text-sm">
          © {currentYear} Copyright by <span className="font-bold">Jatin Rai</span>
        </p>
        
        <div className="flex justify-center space-x-4 mt-2">
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/jatin-rai-a14a1a230/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/jatnrai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>
        </div>

        <div className="mt-2 text-sm">
          <p>Email: <a href="mailto:raijatin62@gmail.com" className="hover:underline">raijatin62@gmail.com</a></p>
          <p>Phone: <a href="tel:+918860483417" className="hover:underline">8860483417</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;