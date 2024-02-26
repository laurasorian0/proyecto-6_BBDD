const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  imagen: { type: String, required: true },
  tamano: { type: String, required: true, enum: ["1a9kg", "10a19kg", "20a39kg", "mas40kg"] },
  pelaje: { type: String, required: true, enum: ["largo", "corto", "sin pelaje", "plumas"] },
  categoria: { type: String, required: true, enum: ["perros", "gatos", "aves", "roedores", "reptiles"] }
}, {
  timestamps: true,
  collection: "animales"
});

const Animal = mongoose.model("animales", animalSchema, "animales");
module.exports = Animal;