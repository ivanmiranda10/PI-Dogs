const { Dog, Temperament } = require("../db.js");
const getApiInfo = require("./infoApi");
const Model = require("./index");

class DogModel extends Model {
  constructor(modelOne, modelTwo) {
    super(modelOne, modelTwo);
  }

  getAll = async (req, res, next) => {
    const { name } = req.query;
    const myDogs = await this.modelOne.findAll({
      include: [
        {
          model: this.modelTwo,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    const apiData = await getApiInfo();
    const allData = [...myDogs, ...apiData];
    try {
      if (name) {
        const inputWords =
          name.indexOf(" ") !== -1 &&
          name.split(" ").map((str) => str.toLowerCase());
        const filterInfo = allData.filter((dog) =>
          inputWords.length >= 2
            ? inputWords?.find((word) => dog.name.toLowerCase().includes(word))
            : dog.name.toLowerCase().includes(name.toLowerCase()) ||
              name.toLowerCase().includes(dog.name.toLowerCase())
        );
        filterInfo.length
          ? res.status(200).json(filterInfo)
          : res.status(404).send("No respond found");
      } else {
        res.send(allData);
      }
    } catch (error) {
      next(error);
    }
  };
}

const dogController = new DogModel(Dog, Temperament);

module.exports = dogController;
