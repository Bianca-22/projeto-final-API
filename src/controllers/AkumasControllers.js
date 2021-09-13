const {akumanomi, ObjectId} = require("../database/database");

const home = async(req, res) => {
    res.send({info: 'Hola'});
};

const getAll = async(req, res) => {
    const akumas = await akumanomi.find({}).toArray();
    if (akumas.length === 0){
        res.status(404).send({error: "Lista vazia"})
    }
    res.send(akumas);
};

const getById = async(req, res) => {
    const id = req.params.id;
    const akuma = await akumanomi.findOne({ _id: ObjectId(id) });

    if (!akuma){
        res.status(404).send({ error: "Akuma no Mi não encontrada."});
    };
    res.send({ akuma });
};

const create = async(req,res) => {
    const objeto = req.body;

    if(!objeto.nome || !objeto.tipo || !objeto.usuario || !objeto.imagem || !objeto.descricao){
        res.status(400).send({error: "Preencha todos os campos"});
        return;
    }

    akumanomi.insertOne(objeto);
    res.send({message: "Akuma no mi criada com sucesso"});
};

const update = async (req, res) => {
    const objeto = req.body;
    const id = req.params.id;
  
    if (!objeto.nome || !objeto.tipo || !objeto.usuario || !objeto.imagem || !objeto.descricao) {
      res.status(400).send({
        message: "Você não enviou todos os dados necessários para a atualização",
      });
      return;
    }
    
    const result = await akumanomi.updateOne({
        _id: ObjectId(id),
    },
    {
        $set: objeto,
    });

    if (result.acknowledged == "undefined") {
        res.status(500).send({ error: "Ocorreu um erro ao atualizar o personagem" });
        return;
    };

    res.send({ message: "Akuma no Mi alterada com sucesso!"});    
};

const del = async (req, res) => {
    const id = req.params.id;

    const result = await akumanomi.deleteOne({
        _id: ObjectId(id),
    });
    
    if (result.deletedCount !== 1) {
        res.status(500).send({error: "Ocorreu um erro ao remover a akuma no mi"});
        return;
    }

    res.send(204);
}

module.exports = {
    home,
    getAll,
    create,
    update,
    getById,
    del
}