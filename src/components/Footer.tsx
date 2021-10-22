import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <h3>Developed by Anas Raza</h3>
      <div className="social">
        <a href="https://www.facebook.com/anasraza987/" rel="noopener noreferrer" target="_blank"><FaFacebook /></a>
        <a href="https://www.linkedin.com/in/anas-raza987/" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/AnasRRaza" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
      </div>
    </div >
  )
}

export default Footer;
