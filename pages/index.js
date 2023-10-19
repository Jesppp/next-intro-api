// pages/index.js

import Link from 'next/link';
import React from 'react';
import '../styles/global.css';

const HjemmeSide = () => {
  return (
      <div class="center">
        <h1> Fullstækk oblig 19.10.2023 </h1>
        <p>Henter dyre fakta fra eget API, samt mulighet for å legge til flere fakta.</p>
        <Link href="/animalFacts" className="link">Gå til dyre fakta</Link>
      </div>
  );
};
  
export default HjemmeSide;