const Movies = require("../models/Movie");
const MoviesList = require("../models/MovieList");

const lista = new MoviesList();

const movie1 = new Movies("Susan Johnson", "1:39m", "Para todos os garotos que já amei");
lista.addMovies(movie1);

lista.addMovies(new Movies("Will Gluck", "1:43m", "Todos menos você"));

const router = {
    addMovies: (req, res) => {
        try {
            const { diretor, duracao, titulo, plays } = req.body;
            if (!diretor || !duracao || !titulo) {
                throw new Error("Preencha todos os campos!");
            }
            const movie = new Movies(diretor, duracao, titulo, plays);
            lista.addMovies(movie);
            res.status(200).json({ message: "Criado com sucesso", movie });
        } catch (error) {
            res.status(400).json({
                message: "Erro ao criar filme",
                error: error.message,
            });
        }
    },

    getAllMoviess: (req, res) => {
        try {
            const Moviess = lista.getAllMoviess();
            res.status(200).json(Moviess);
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar filmes",
                error: error.message,
            });
        }
    },

    getMoviesById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getMoviesById(id));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar filme por id",
                error: error.message,
            });
        }
    },

    updateMovies: (req, res) => {
        try {
            res.status(200).json(lista.updateMovies(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao atualizar",
                error: error.message,
            });
        }
    },

    deleteMovies: (req, res) => {
        try {
            const Movies = req.params.id;
            lista.deleteMovies(Movies);
            res.status(200).json({
                message: "Filme deletado com sucesso",
                Movies,
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