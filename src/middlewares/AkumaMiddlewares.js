const {Akumanomi, ObjectId} = require("../database/database");

getAkumaById = async (id) => Akumanomi.findOne({ _id: ObjectId(id) });

const validaId = async (req, res,next) => {
    const id = req.params.id;
    if(!ObjectId.isValid(id)){
        res.status(400).send({error: "id inválido"});
        return;
    }
    try {
        const akumanomi = await getAkumaById(id);
        if(!akumanomi){
            return res.status(404).send({message: "Akuma no mi não encontrada"});
        }
        res.akumanomi = akumanomi;
    } catch (err) {
      return res.status(500).send({error: err})
    }
    next();
};

module.exports = {
    validaId
};