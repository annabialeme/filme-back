const Movie = require("../models/Movie");
const MovieList = require("../models/MovieList");

const lista = new MovieList();

const movie1 = new Movies("Susan Johnson", "1:39m", "Para todos os garotos que já amei");
lista.addMovie(movie1);

lista.addMovie(new Movies("Will Gluck", "1:43m", "Todos menos você"));

const router = {
    addMovie: (req, res) => {
        try {
            const { diretor, duracao, titulo, plays } = req.body;
            if (!diretor || !duracao || !titulo) {
                throw new Error("Preencha todos os campos!");
            }
            const movie = new Movies(diretor, duracao, titulo, plays);
            lista.addMovie(movie);
            res.status(200).json({ message: "Criado com sucesso", movie });
        } catch (error) {
            res.status(400).json({
                message: "Erro ao criar filme",
                error: error.message,
            });
        }
    },

    getAllMovie: (req, res) => {
        try {
            const Movie = lista.getAllMovie();
            res.status(200).json(Movie);
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
            const Movie = req.params.id;
            lista.deleteMovie(Movie);
            res.status(200).json({
                message: "Filme deletado com sucesso",
                Movie,
            });
        } catch (error) {
            res.status(404).json({
                message: "Erro ao deletar filme",
                error: error.message,
            });
        }
    },

};

module.exports = router;