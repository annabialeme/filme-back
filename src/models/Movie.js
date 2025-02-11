const { v4: uuid4 } = require("uuid");

class Movie {
    constructor(diretor, duracao, titulo, plays = 0) {
        this.id = uuid4();
        this.diretor = diretor;
        this.duracao = duracao;
        this.titulo = titulo;
        this.plays = plays;
    }

    play() {
        this.plays += 1;
    }
}

module.exports = Movie;