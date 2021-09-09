const connectMongo = require("../database/database");

const Akumanomi = connectMongo.akumasnomis.insertOne({
    nome:{
        type: String,
        require: true
    },
    tipo:{
        type: String,
        require: true
    },
    usuario:{
        type: String,
        require: true
    },
    imagem:{
        type: String,
        require: true
    },
    descricao:{
        type: String,
        require: true
    }
});

module.exports = Akumanomi