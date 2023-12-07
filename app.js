const express = require('express');
const app = express();
const port = 3864; // Wähle einen beliebigen Port, den du verwenden möchtest

// Middleware, um JSON-Body aus Anfragen zu verarbeiten
app.use(express.json());

// POST-Endpunkt für den Webhook
app.get('/webhook', (req, res) => {
  // Daten vom Webhook erhalten
  const receivedData = req.body;
  
  // Hier kannst du mit den empfangenen Daten arbeiten
  console.log('Empfangene Daten:', receivedData);
  
  // Gib eine Antwort an den Absender des Webhooks zurück
  res.status(200).send('Webhook empfangen');
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:3864/`);
});
