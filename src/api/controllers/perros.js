const Animal = require("../models/perros")


const getAnimales = async (req, res, next) => {
  try {
    const animal = await Animal.find();
    return res.status(200).json(animal);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getAnimalesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findById(id);
    return res.status(200).json(animal);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getAnimalesByCategory = async (req, res, next) => {
  try {
    const { categoria } = req.params;
    const animales = await Animal.find({ categoria: categoria })
    return res.status(200).json(animales);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getAnimalesByTamaño = async (req, res, next) => {
  try {
    const { tamano } = req.params;
    const animales = await Animal.find({ tamano: tamano })
    return res.status(200).json(animales);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const getAnimalesByPelaje = async (req, res, next) => {
  try {
    const { pelaje } = req.params;
    const animales = await Animal.find({ pelaje: pelaje })
    return res.status(200).json(animales);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const postAnimal = async (req, res, next) => {
  try {
    const newAnimal = new Animal(req.body);
    const animalSaved = await newAnimal.save()
    return res.status(201).json(animalSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
}
const putAnimal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newAnimal = new Animal(req.body);
    newAnimal._id = id;
    const animalUpdated = await Animal.findByIdAndUpdate(id, newAnimal, {
      new: true,
    });
    return res.status(200).json(animalUpdated);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

const deleteAnimal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const animalDeleted = await Animal.findByIdAndDelete(id);
    return res.status(200).json(animalDeleted);
  } catch (error) {
    return res.status(400).json("Error en la solicitud");
  }
}

module.exports = {
  getAnimales,
  getAnimalesById,
  getAnimalesByCategory,
  getAnimalesByTamaño,
  getAnimalesByPelaje,
  postAnimal,
  putAnimal,
  deleteAnimal
}

