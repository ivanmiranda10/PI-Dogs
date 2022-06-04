const getApiInfo = require("./infoApi");

class Model {
  constructor(modelOne, modelTwo) {
    this.modelOne = modelOne;
    this.modelTwo = modelTwo;
  }

  getById = async (req, res, next) => {
    const { id } = req.params;
    if (id.includes("-")) {
      return this.modelOne
        .findByPk(id, {
          include: [
            {
              model: this.modelTwo,
              attributes: ["name"],
              through: {
                attributes: [],
              },
            },
          ],
        })
        .then((result) => res.send(result))
        .catch((err) => next(err));
    } else {
      getApiInfo()
        .then((results) => {
          res.send(results.find((el) => el.id === Number(id)));
        })
        .catch((err) => next(err));
    }
  };

  post = async (req, res, next) => {
    const { name, temperament, ...body } = req.body;
    try {
      const [dog, created] = await this.modelOne.findOrCreate({
        where: { name },
        defaults: {
          ...body,
          image:
            "https://www.pngitem.com/pimgs/m/76-767784_clip-art-boxer-dog-silhouette-vector-boxer-dog.png",
        },
      });
      let newDogTemperaments = await this.modelTwo.findAll({
        where: { name: temperament },
      });
      let noTemp = await this.modelTwo.findOne({
        where: { name: "No temperaments" },
      });
      dog.addTemperaments(
        newDogTemperaments.length ? newDogTemperaments : noTemp
      );
      res
        .status(200)
        .send(
          created === false ? `${name} already exist` : "created successfully"
        );
    } catch (error) {
      next(error);
    }
  };

  delete = (req, res, next) => {
    const { id } = req.params;
    return this.modelOne
      .destroy({ where: { id: id } })
      .then((resp) => res.status(200).json(resp))
      .catch((err) => next(err));
  };
}

module.exports = Model;
