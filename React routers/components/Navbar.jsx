import React from 'react';
import { Link } from 'react-router'; 
function Navbar() {
  return (
    <div className="flex justify-center items-center gap-2.5 bg-gray-100 p-4">
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;