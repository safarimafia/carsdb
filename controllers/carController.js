const Car = require('../models/Car');

exports.createCar = async (req, res) => {
  try {
    const newCar = new Car(req.body);
    const car = await newCar.save();
    res.status(201).send(car);
  } catch (err) {
    console.error('Error creating car:', err);
    res.status(500).send(err);
  }
};

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    res.status(200).send(cars);
  } catch (err) {
    console.error('Error getting cars:', err);
    res.status(500).send(err);
  }
};

exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(car);
  } catch (err) {
    console.error('Error updating car:', err);
    res.status(500).send(err);
  }
};

exports.deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndRemove(req.params.id);
    res.status(200).send({ message: 'Car deleted successfully' });
  } catch (err) {
    console.error('Error deleting car:', err);
    res.status(500).send(err);
  }
};

exports.getCarsOlderThanFiveYears = async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    const cars = await Car.find(
      { year: { $lt: currentYear - 5 } },
      'model make registrationNumber currentOwner'
    );
    res.status(200).send(cars);
  } catch (err) {
    console.error('Error getting cars older than 5 years:', err);
    res.status(500).send(err);
  }
};
