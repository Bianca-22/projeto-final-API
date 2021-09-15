const express = require("express");
const routes = express.Router();

const akumaController = require("../controllers/AkumasControllers");
const akumaMiddleware = require("../middlewares/AkumaMiddlewares");

routes.get(
    "/home", 
    akumaController.home
);
routes.get(
    "/read-all", 
    akumaController.getAll
);
routes.get(
    "/read-by-id/:id",
    akumaMiddleware.validaId, 
    akumaController.getById
);
routes.post(
    "/create", 
    akumaController.create
);
routes.put(
    "/update/:id", 
    akumaMiddleware.validaId, 
    akumaController.update
);
routes.delete(
    "/delete/:id", 
    akumaMiddleware.validaId, 
    akumaController.del
);
routes.get("/filter", akumaController.filterAll);

routes.all("*", function (req, res) {
    res.status(404).send({ message: "Endpoint was not found" });
});
routes.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        },
    });
});

module.exports = routes;