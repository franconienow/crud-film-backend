const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const filmController = require("./controllers/FilmController");

// db instance connection
require("./config/db");

const app = express();
app.use(cors());

const port = process.env.PORT || 443;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// API ENDPOINTS

app
  .route("/films")
  .get(filmController.listAllFilms)
  .post(filmController.createNewFilm);

app
  .route("/films/:filmid")
  .get(filmController.readFilm)
  .put(filmController.updateFilm)
  .delete(filmController.deleteFilm);


app.listen(port, () => {  
  console.log(`Server is listening on port ${port}`);
});