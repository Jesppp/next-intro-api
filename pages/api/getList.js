// pages/api/getList.js

export default (req, res) => {
  if (req.method === 'GET') {
    const animalFacts = [
      { fact: 'Elefanten er det eneste pattedyret som ikke kan hoppe.' },
      { fact: 'Dovendyret beveger seg bare 2 meter i minuttet.' },
      { fact: 'I Kina bor det 3 milliarder kyllinger.' },
      { fact: 'En stokkand har et synsfelt på 360 grader.' },
      { fact: 'I USA er det flere flamingoer av plastikk enn levende flamingoer.' },
      { fact: 'Flodhesten er i slekt med grisen.' }
    ];

    res.status(200).json(animalFacts);
  } else {
    res.status(405).end(); // Method not allowed
  }
};