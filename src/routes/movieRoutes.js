const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/movies", movieController.getAllMovies);
router.post("/movies", movieController.addMovie);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/songs/:id", movieController.deleteMovie);
router.get("/songs/:id", movieController.getMovieById);

module.exports = router;