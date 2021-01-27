const Film = require("../models/Film");

// List all available films from database....
exports.listAllFilms = (req, res) => {
  Film.find({}, (err, film) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(film);
  });
};

// Creating a new film and save it to database....
exports.createNewFilm = (req, res) => {
  let newFilm = new Film(req.body);
  newFilm.save((err, film) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(film);
  });
};

// Read a perticular fiml by _id......
exports.readFilm = (req, res) => {
  Film.findById(req.params.filmid, (err, film) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(film);
  });
};

// Update a perticular film by _id ....
exports.updateFilm = (req, res) => {
  Film.findOneAndUpdate(
    { _id: req.params.filmid },
    req.body,
    { new: true },
    (err, film) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(film);
    }
  );
};

// Delete a perticular film by _id .....
exports.deleteFilm = (req, res) => {
  Film.remove({ _id: req.params.filmid }, (err, film) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Film successfully deleted" });
  });
};