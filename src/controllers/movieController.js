const Movie = require("../models/Movie");
const MovieList = require("../models/MovieList");

const lista = new MovieList();

const movie1 = new Movie("Susan Johnson", "1:39m", "Para todos os garotos que já amei");
lista.addMovie(movie1);

lista.addMovie(new Movie("Will Gluck", "1:43m", "Todos menos você"));

const movieController = {
    addMovie: (req, res) => {
        try {
            const { diretor, duracao, titulo, plays } = req.body;
            if (!diretor || !duracao || !titulo) {
                throw new Error("Preencha todos os campos!");
            }

            const movie = new Movie(diretor, duracao, titulo, plays);
            lista.addMovie(movie);

            res.status(200).json({ message: "Criado com sucesso", movie });
        } catch (error) {
            res.status(400).json({
                message: "Erro ao criar filme",
                error: error.message,
            });
        }
    },

    getAllMovies: (req, res) => {
        try {
            const movies = lista.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar filmes",
                error: error.message,
            });
        }
    },

    getMovieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getMovieById(id));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar filme por id",
                error: error.message,
            });
        }
    },

    updateMovie: (req, res) => {
        try {
            res.status(200).json(lista.updateMovie(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao atualizar",
                error: error.message,
            });
        }
    },

    deleteMovie: (req, res) => {
        try {
            const movieId = req.params.id;
            lista.deleteMovie(movieId);
            res.status(200).json({
                message: "Filme deletado com sucesso",
                movieId,
            });
        } catch (error) {
            res.status(404).json({
                message: "Erro ao deletar filme",
                error: error.message,
            });
        }
    },
};

module.exports = movieController;