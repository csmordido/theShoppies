import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p>The Shoppies {year}</p>
    </footer>
  )
}

export default Footer;