import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
 return (
  <div className="footer">
   <i className="fab fa-github"></i>
   <Link to="https://github.com/mrJozhkinKot">Follow Github</Link>
  </div>
 );
};

export default Footer;
