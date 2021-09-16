const conexao = require("../database/database");
const AkumaSchema = require("../models/AkumanomiModel");

const home = async(req, res) => {
    res.send({info: 'Hey Guys!!'});
};

const getAll = async(req, res) => {
  const akumanomi = await AkumaSchema.find({});
  if (akumanomi.length === 0){
    res.status(404).send({message: "Lista vazia"});
  };
  res.send({ akumanomi });
};

const getById = async(req, res) => {
  const id = req.params.id;
  const akumanomi = await AkumaSchema.findById(id);
  res.send({ akumanomi });
};

const create = async(req,res) => {
  const akuma = req.body;

  if (!akuma || !akuma.nome || !akuma.tipo || !akuma.usuario || !akuma.imagem || !akuma.descricao){
    res.status(400).send({ error: "Preencha todos os campos" });
    return;
  }

  const novaAkuma = await new AkumaSchema(akuma).save();

  res.status(201).send({ novaAkuma });

//     const objeto = req.body;

//     if(!objeto.nome || !objeto.tipo || !objeto.usuario || !objeto.descricao){
//         res.status(400).send({error: "Preencha todos os campos"});
//         return;
//     }

//     Akumanomi.insertOne(objeto);
//     res.send({message: "Akuma no mi criada com sucesso"});
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
    
  await AkumaSchema.findOneAndUpdate({ _id: id }, objeto);
  const akumaAtualizada = await AkumaSchema.findById(id);

  res.send({ akumaAtualizada });  
};

const del = async (req, res) => {
  const id = req.params.id;

  await AkumaSchema.findByIdAndDelete(id);
  res.status(204).send({message: 'Akuma no mi excluída com sucesso!'});
};

const filterAll = async (req, res) => {
  let { nome,tipo,usuario } = req.query;

  !nome ? (nome = "") : (nome = nome);
  !tipo ? (tipo = "") : (tipo = tipo);
  !usuario ? (usuario = "") : (usuario = usuario);

  try {
    const akumanomi = await AkumaSchema.find({
      nome: { $regex: `${nome}`, $options: 'i' },
      tipo: { $regex: `${tipo}`, $options: 'i' },
      usuario: { $regex: `${usuario}`, $options: 'i' },
    });

    if (akumanomi.length === 0)
      return res.status(404).send({ erro: "akumanomi não encontrado" });

    return res.send({ akumanomi });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
    home,
    getAll,
    create,
    update,
    getById,
    del,
    filterAll
}
