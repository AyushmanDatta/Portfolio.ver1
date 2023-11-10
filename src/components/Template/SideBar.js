import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Ayushman Datta</h2>
        <p><a href="ayushmandatta@gmail.com">ayushmandatta@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ayushman. I am an undergraduate at <a href="https://icme.stanford.edu/">SRMIST</a>,Kattankulathur, Chennai India.
        I have gained valuable experience through my internships at Calcutta University under
        <a href="https://www.caluniv.ac.in/academic/Compsc/Nabendu-Chaki.pdf"> Professor Dr.Nabendu Chaki</a> and
        <a href="https://www.learnabyte.com"> LearnAbyte</a>.These opportunities
        honed my skills and exposed me to real-world applications. Now, I&apos;m
        diving into the world of AI, eager to create transformative solutions.
        {' '}
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ayushman&apos;Datta <Link to="ayushmandatta@gmail.com">ayushmandatta@gmail.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
