const { Router } = require("express");

const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

//QueryParams: request.query (filtros, ordenação, paginação) /?search=Felipe
//RouteParams: request.params (Identificar um recurso na alteração ou remoção) /:id
//Body: request.body (Criação ou alteração de um registro)

routes.get("/devs", DevController.index);

routes.post("/devs", DevController.store);

routes.put("/devs", DevController.update);

routes.delete("/devs/:name", DevController.destroy);


routes.get("/search", SearchController.index);

module.exports = routes;
  