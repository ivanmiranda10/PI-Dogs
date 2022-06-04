require("dotenv").config();
const axios = require("axios");
const { API_KEY, BASE_URL } = process.env;

const getApiInfo = async () => {
  const apiDogs = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
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
  return dogsArray;
};

module.exports = getApiInfo;
