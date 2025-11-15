// export { default } from './footer';
import React from 'react'
import { Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
    <footer className="card mt-8">
      <div className="max-w-4xl mx-auto flex items-center justify-center py-4">
        {/* center icons with spacing and hover states */}
        <div className="flex items-center space-x-6">
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/muhammadabu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FontAwesomeIcon icon={faLinkedin} className="site-icon" />
          </a>
          <a
            aria-label="GitHub"
            href="https://github.com/abubakar2029"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FontAwesomeIcon icon={faGithub} className="site-icon" />
          </a>
          <a
            aria-label="Email"
            href="mailto:bakar.cs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <FontAwesomeIcon icon={faEnvelopeSolid} className="site-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer