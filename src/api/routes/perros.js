const { getAnimales, getAnimalesByCategory, getAnimalesById, getAnimalesByPelaje, getAnimalesByTamaño, putAnimal, postAnimal, deleteAnimal } = require("../controllers/perros");

const animalesRouter = require("express").Router();



animalesRouter.get("/:id", getAnimalesById);
animalesRouter.get("/categoria/:categoria", getAnimalesByCategory);
animalesRouter.get("/pelaje/:pelaje", getAnimalesByPelaje);
animalesRouter.get("/tamano/:tamano", getAnimalesByTamaño);
animalesRouter.get("/", getAnimales);
animalesRouter.put("/:id", putAnimal);
animalesRouter.post("/", postAnimal);
animalesRouter.delete("/:id", deleteAnimal);

module.exports = animalesRouter;
