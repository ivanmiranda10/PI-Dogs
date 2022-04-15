const { Dog, Temperament } = require("../db.js");
const { allInfo } = require("./index.js");

async function getDogs(req, res, next) {
  const { name } = req.query;
  try {
    const allDogs = await allInfo();
    // console.log(allDogs)
    if (name) {
      const inputWords =
        name.indexOf(" ") !== -1 &&
        name.split(" ").map((str) => str.toLowerCase());
        const filterInfo = allDogs.filter((dog) =>
        inputWords.length >= 2
          ? inputWords?.find((word) => dog.name.toLowerCase().includes(word))
          : dog.name.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(dog.name.toLowerCase())
      );
      // console.log(filterInfo)
      filterInfo.length
        ? res.status(200).json(filterInfo)
        : res.status(404).send("No dogs found");
    } else {
      return res.status(200).json(allDogs);
    }
  } catch (err) {
    next(err);
  }
}

function getDogById(req, res, next) {
  const { id } = req.params;
  allInfo()
    .then(async (resp) => {
      if (!id.includes("-")) {
        const searchId = resp.filter((el) => el.id === Number(id));
        // console.log(searchId)
        searchId.length
          ? res.status(200).json({
              id: searchId[0].id,
              name: searchId[0].name,
              weightMin: searchId[0].weightMin,
              weightMax: searchId[0].weightMax,
              heightMin: searchId[0].heightMin,
              heightMax: searchId[0].heightMax,
              temperament: searchId[0].temperament,
              life_span: searchId[0].life_span,
              image: searchId[0].image,
            })
          : res.status(404).send("Breed from API not found");
      } else {
        const gameFromDb = await Dog.findByPk(id, {
          include: [
            {
              model: Temperament,
              atrributes: ["name"],
              through: {
                attributes: [],
              },
            },
          ],
        });
        // console.log(gameFromDb.toJSON())
        gameFromDb
          ? res.status(200).json(gameFromDb)
          : res.status(404).send("Breed from DB not found");
      }
    })
    .catch((err) => next(err));
}

async function postDog(req, res, next) {
  const {
    name,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    life_span,
    temperament,
  } = req.body;
  try {
    const [dog, created] = await Dog.findOrCreate({
      where: { name },
      defaults: {
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        life_span,
        image:
          "https://www.pngitem.com/pimgs/m/76-767784_clip-art-boxer-dog-silhouette-vector-boxer-dog.png",
      },
    });
    // console.log(dog.toJSON())
    let newDogTemperaments = await Temperament.findAll({
      where: { name: temperament },
    });
    // console.log(newDogTemperaments[0].dataValues)
    let noTemp = await Temperament.findOne({
      where: { name: "No temperaments" },
    });
    dog.addTemperaments(
      newDogTemperaments.length ? newDogTemperaments : noTemp
    );
    res
      .status(200)
      .send(
        created === false ? `${name} already exist` : "Dog created successfully"
      );
  } catch (err) {
    next(err);
  }
}

function deleteDog(req, res, next) {
  const { id } = req.params;
  return Dog.destroy({ where: { id: id } })
    .then((resp) => res.status(200).json(resp))
    .catch((err) => next(err));
}

module.exports = {
  getDogs,
  getDogById,
  postDog,
  deleteDog,
};
