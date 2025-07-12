import React from 'react';
import { navLinks } from '../constants';
import { useEffect } from 'react';
const NavBar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
        const isScrolled=window.scrollY > 10;
        setScrolled( isScrolled);
   
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a
          href="
            #hero"
          className="logo"
        >
          Rayen Challouf
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map((link, name) => (
              <li key={name} className="group">
                <a href={link.link} className="nav-link">
                  <span>{link.name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
