const conexao = require("../database/database");
const AkumaSchema = require("../models/AkumanomiModel");

const validaId = async (req, res,next) => {
    const id = req.params.id;
    if (!conexao.Types.ObjectId.isValid(id)) {
        res.status(422).send({ error: "Id inválido" });
        return;
    };
    try {
        const akumanomi = await AkumaSchema.findById(id);
        if (!akumanomi) {
        res.status(404).send({ erro: "Akuma no mi não encontrada!" });
        return;
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