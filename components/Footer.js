import React from 'react';

const Footer = () => (
  <footer className="bg-dark p-3 text-center" data-testid="footer">
    <div className="logo" data-testid="footer-logo" />
    <p data-testid="footer-text">
      powered by <a href="https://insa.ne">insa.ne</a>
    </p>
  </footer>
);

export default Footer;