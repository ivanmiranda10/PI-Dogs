require("dotenv").config();
const axios = require("axios");
const { Dog, Temperament } = require("../db.js");
const { API_KEY } = process.env;



const getApiInfo = async () => {
    const apiDogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    // console.log(apiDogs.data)
    const dogsArray = await apiDogs.data.map((el) => {
      return {
        id: el.id,
        name: el.name,
        weightMin: Number(el.weight.metric.substring(0, 2).trim()),
        weightMax: Number(el.weight.metric.substring(4).trim()),
        heightMin: Number(el.height.metric.substring(0, 2).trim()),
        heightMax: Number(el.height.metric.substring(4).trim()),
        temperament: el.temperament ? el.temperament : "No temperaments",
        life_span: el.life_span,
        image: el.image.url,
      };
    });
    // console.log(dogsArray.slice(0, 10));
    return dogsArray;
};



const getDbInfo = async () => {
    return await Dog.findAll({
      include: [
        {
          model: Temperament,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
};



const allInfo = async () => {
  const apiData = await getApiInfo();
  const dbData = await getDbInfo();
  const concatData = dbData.concat(apiData)
  return concatData;
};


module.exports = {
    allInfo
}