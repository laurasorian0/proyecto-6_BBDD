require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const animalesRouter = require("./src/api/routes/perros");

const app = express();

//Conectar a la base de datos.
mongoose.connect(process.env.DB_URL)
  .then(() => console.log("Conectado con éxito a la bbdd"))
  .catch(() => console.log("Fallo al conectar a la base de datos"));


//para que nuestro servidor sea capaz de recibir datos en formato json
app.use(express.json());

app.use("/api/v1/animales", animalesRouter)

//Si introduzco una url no válida:
app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found 😅")
})

//Levantar servidor.
app.listen(3000, () => {
  console.log("Servidor levantado en http://localhost:3000 😃")
})