const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.${process.env.DB_CHAR}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(url, {useUnifiedTopology: true, useNewUrlParser: true });

client.connect(() => {
    console.log("Conectado Com Sucesso")
});

const db = client.db("onepiece_db");
const akumanomi = db.collection('akumanomi');

module.exports = {akumanomi,ObjectId};