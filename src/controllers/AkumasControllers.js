const {Akumanomi, ObjectId} = require("../database/database");

const home = async(req, res) => {
    res.send({info: 'Hola'});
};

const getAll = async(req, res) => {
    const akumanomi = await Akumanomi.find({}).toArray();
    if (akumas.length === 0){
        res.status(404).send({error: "Lista vazia"})
    }
    res.send({ akumanomi });
};

const getById = async(req, res) => {
    const id = req.params.id;
    const akumanomi = await Akumanomi.findOne({ _id: ObjectId(id) });

    if (!akuma){
        res.status(404).send({ error: "Akuma no Mi não encontrada."});
    };
    res.send({ akumanomi });
};

const create = async(req,res) => {
    const objeto = req.body;

    if(!objeto.nome || !objeto.tipo || !objeto.usuario || !objeto.descricao){
        res.status(400).send({error: "Preencha todos os campos"});
        return;
    }

    Akumanomi.insertOne(objeto);
    res.send({message: "Akuma no mi criada com sucesso"});
};

const update = async (req, res) => {
    const objeto = req.body;
    const id = req.params.id;
  
    if (!objeto.nome || !objeto.tipo || !objeto.usuario || !objeto.descricao) {
      res.status(400).send({
        message: "Você não enviou todos os dados necessários para a atualização",
      });
      return;
    }
    
    const result = await Akumanomi.updateOne({
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

    const result = await Akumanomi.deleteOne({
        _id: ObjectId(id),
    });
    
    if (result.deletedCount !== 1) {
        res.status(500).send({error: "Ocorreu um erro ao remover a akuma no mi"});
        return;
    }

    res.send(204);
};

// const filterAll = async (req, res) => {
//     var { nome, tipo, usuario } = req.query;
  
//     !nome ? (nome = "") : (nome = nome);
//     !tipo ? (tipo = "") : (tipo = tipo);
//     !usuario ? (usuario = "") : (usuario = usuario);
  
//     try {
//       const akumanomi = await Akumanomi.find({
//         nome: { $regex: `${nome}`, $options: 'i' },
//         tipo: { $regex: `${tipo}`, $options: 'i' },
//         usuario: {$regex: `${usuario}`, $options: 'i' },
//       });
  
//       if (akumanomi.length === 0){
//         return res.status(404).send({ erro: "Akuma no Mi não encontrada" });
//       }
//       return res.send({ akumanomi });
//     } catch (err) {
//       return res.status(500).send({ error: err.message });
//     }
// };

module.exports = {
    home,
    getAll,
    create,
    update,
    getById,
    del,
    //filterAll
}