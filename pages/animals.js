// pages/animals.js

import { useState, useEffect } from 'react';
import '../styles/global.css';
import Link from 'next/link';

export default function Animals() {
  const [collection, setCollection] = useState([]);
  const [newFact, setNewFact] = useState('');

  useEffect(() => {
    fetch('/api/getList')
      .then((response) => response.json())
      .then((data) => setCollection(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleDataSubmit = () => {
    // Sender ny fakta til API routen med POST request
    fetch('/api/postData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fact: newFact }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        console.log('Response from POST request:', response);
        // Oppdaterer UI ved å legge til faktaen i collection
        setCollection([...collection, { fact: newFact }]);
        setNewFact(''); // Klarerer input feltet etter at collection blir oppdatert
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Dyre fakta</h1>
      <button className="back-button">
        <Link href="/">Gå tilbake til forsiden</Link>
      </button>
      <ul>
        {collection.map((item, index) => (
          <li key={index}>{item.fact}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Skriv inn enda en fakta"
        value={newFact}
        onChange={(e) => setNewFact(e.target.value)}
      />
      <button onClick={handleDataSubmit}>Legg til</button>
    </div>
  );
}