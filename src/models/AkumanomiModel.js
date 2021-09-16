const conexao = require("../database/database");

const AkumaSchema = new conexao.Schema({
    nome: {
        type: String,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    usuario: {
        type: String,
        require: true
    },
    imagem: {
        type: String,
        require: true
    },
    descricao: {
        type: String,
        require: true
    }
});

const Akumanomi = conexao.model("Akumanomi", AkumaSchema);

module.exports = Akumanomi;