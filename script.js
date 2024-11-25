const ovciJmena = [
  "Bětuška",
  "Cína",
  "Dolly",
  "Heidy",
  "Líza",
  "Belinda",
  "Celia",
  "Elvíra",
  "Karla",
  "Otýlie",
  "Škraboška",
  "Kopretinka",
  "Berta",
  "Růženka",
  "Bobinka",
  "Žofka",
  "Dášenka",
  "Vlnka",
  "Květuše",
  "Pampeliška",
];

/*
Pomocí metody forEach do stránky vepište deset za sebou jdoucích vět v následující podobě:
Ovečka Bětuška jako 1. přeskočila přes plot. Ovečka Cína jako 2. přeskočila přes plot. Ovečka Dolly jako 3. přeskočila přes plot…
  */

// řešení s využitím indexOf
ovciJmena.forEach((sheep) => {
  const sheepIndex = ovciJmena.indexOf(sheep);
  console.log(`Ovečka ${sheep} jako ${sheepIndex + 1}. přeskočila plot.`);
});

// lepší řešení s využitím druhého parametru metody forEach - indexu
ovciJmena.forEach((sheep, i) => {
  console.log(`Ovečka ${sheep} jako ${i + 1}. přeskočila plot.`);
});
