const mongodb = require("mongodb");
const Akumanomi = require("../models/AkumaNoMi");
const connectMongo = require("../database/database");
const ObjectId = mongodb.ObjectId;

const getPersonagemById = async (id) => connectMongo.akumasnomis.findOne({
     _id: ObjectId(id) 
});
const getPersonagensValidas = () => connectMongo.akumasnomis.find({}).toArray();

const validaId = async (req, res) => {
    const { id } = req.params;

    if(!getPersonagemById){
        res.status(400).send({error: "id inválido"});
        return;
    }

    try {
        const akumanomi = await Akumanomi.findById(id);
        if(!akumanomi){
            return res.status(404).send({message: "Personagem não encontrado"})
        }
        res.akumanomi = akumanomi
    } catch (err) {
      return res.status(500).send({error: err})
    }
  
    next();
};

module.exports = {
    getPersonagemById,
    getPersonagensValidas,
    validaId
}