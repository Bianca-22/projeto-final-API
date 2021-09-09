const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();

const connectToDb = () => {
    const dbUser = process.env.DB_USER;
	const dbPassword = process.env.DB_PASSWORD;
	const dbName = process.env.DB_NAME;
	const dbChar = process.env.DB_CHAR;
	const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.${dbChar}.mongodb.net/${dbName}?retryWrites=true&w=majority`;
	const options = {
		useUnifiedTopology: true,
	};
	const client = await mongodb.MongoClient.connect(connectionString, options);

    const db = client.db("akumanomi_db");
    const akumasnomis = db.collection("akumasnomis");
};

module.exports = connectToDb;