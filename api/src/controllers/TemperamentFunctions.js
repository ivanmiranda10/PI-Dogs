const { Dog, Temperament } = require("../db.js");
const getApiInfo = require("./infoApi");
const Model = require("./index");

class ModelTemperament extends Model {
  constructor(modelOne, modelTwo) {
    super(modelOne, modelTwo);
  }

  getTemperaments = (req, res, next) => {
    getApiInfo()
      .then((dogs) => {
        if (dogs) {
          // console.log(dogs)
          const dogsTemps = dogs.map((el) => el.temperament);
          // console.log(dogsTemps)
          const readyToSet = dogsTemps.join(", ").split(", ");
          // console.log(readyToSet)
          let set = new Set(readyToSet);
          // console.log(set)
          let setToArray = [...set].sort();
          // console.log(setToArray)
          if (setToArray.length) {
            setToArray.forEach((el) => {
              if (el) {
                return this.modelTwo.findOrCreate({
                  where: {
                    name: el,
                  },
                });
              }
            });
          }
          this.modelTwo
            .findAll()
            .then((resp) => res.status(200).json(resp))
            .catch(() =>
              res.status(404).send("Error to load data into the data base")
            );
        } else {
          return res.status(404).send("No data");
        }
      })
      .catch((err) => next(err));
  };
}

const temperamentController = new ModelTemperament(Dog, Temperament);

module.exports = temperamentController;
