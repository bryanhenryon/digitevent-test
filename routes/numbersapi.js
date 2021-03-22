const express = require("express");
const router = express.Router();
const axios = require("axios");

// API endpoint à appeler depuis le front
router.post("/api/numbersapi", (req, res) => {
    // Data reçues du front
    const date = req.body.date; 
    
    const url = `http://numbersapi.com/${date}/date`;

    // Appel Axios à l'API externe, sous forme de fonction afin d'utiliser async/await
    const getData = async (url) => {
        try {
            const response = await axios.get(url);
            const data = response.data;
            res.send(data);
          } catch (error) {
            res.send(error);
            console.log(error);
          }
        }
        
        getData(url);
})
module.exports = router;