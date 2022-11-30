import React from 'react'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Presentation from './components/Presentation';
import Skills from './components/Skills';

export default function Home() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
          <Navbar />
          <Presentation/>
          <Skills/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </main>
    );
}
