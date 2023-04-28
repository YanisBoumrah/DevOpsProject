const express = require("express");
const app = express();

// Route pour l'URL localhost:8000/
app.get("/", (req, res) => {
  res.send("Bonjour");
});

// Route pour l'URL localhost:8000/bonjour
app.get("/bonjour", (req, res) => {
  res.send("Ça va ?");
});

// Démarrage du serveur
app.listen(8000, () => {
  console.log("Serveur démarré sur le port 8000");
});
