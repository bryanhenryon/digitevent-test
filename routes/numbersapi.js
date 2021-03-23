const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/api/get_facts", (req, res) => {

  // Données reçues depuis le front sous forme d'array (["17/4", "3/10", ...])
  const dates = req.body.dates;

  // Array de requêtes à effectuer
  const requests = [];

  // Array de facts à renvoyer au client
  const facts = [];

  try {
    
    // Pour chaque valeur dans l'array "dates", effectue une requête à l'API externe et la stocke dans la variable "requests"
    for(let date of dates) {
      let request = axios.get(`http://numbersapi.com/${date}/date`);
      requests.push(request);

      // Stocke un objet contenant la première propriété à retourner au client (la date)
      facts.push({
        date
      });
    }

    // Envoi simultané de toutes les requêtes demandées par le client
    axios.all(requests).then((requests) => {

      // Ajoute une propriété "data" contenant une fact à chaque objet de l'array "facts"
      requests.forEach((request, index) => {
        facts[index]["data"] = request.data;
      })

      // Envoie l'array "facts" rempli d'objets contenants une date et une fact au client
      res.send(facts);
    }).catch(err => {
      res.send(err);
      console.log(err);
    });

  } catch (error) {
    res.send(error);
    console.log(error);
  }
});


module.exports = router;