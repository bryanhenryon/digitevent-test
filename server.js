const express = require("express");
const numbersApiRouter = require("./routes/numbersapi");
const app = express();
var cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public/'));
app.use(numbersApiRouter);

// Renvoie toutes les requêtes à Vue
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});