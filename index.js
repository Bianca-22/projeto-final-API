const express = require("express");
require("dotenv").config();
const routes = require("./src/routes/routes");
const port = process.env.PORT || 3000;


const app = express();
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.info(`Servidor rodando em https://localhost:${port}`)
})