const express = require('express');
const app = express();
const port = 7892;
let receivedDataArray = []; // Array, um empfangene Daten zu speichern

app.use(express.json());

app.get('/webhook', (req, res) => {
  const receivedData = req.body;
  
  // Die empfangene Nachricht als weitere ID zum Array hinzufügen
  receivedDataArray.push(receivedData);
  
  // Hier kannst du mit den empfangenen Daten arbeiten
  console.log('Empfangene Daten:', receivedData);
  
  res.status(200).send('Webhook empfangen');
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:7892/`);
});

