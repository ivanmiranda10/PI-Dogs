const { Temperament } = require('../db.js');
const { allInfo } = require('./index.js');


function getTemperaments (req, res, next){
    allInfo().then((dogs) => {
        if(dogs){
            // console.log(dogs)
            const dogsTemps = dogs.map((el) => el.temperament)
            // console.log(dogsTemps)
            const readyToSet = dogsTemps.join(', ').split(', ')
            // console.log(readyToSet)
            let set = new Set(readyToSet); 
            // console.log(set)
            let setToArray = [...set].sort()
            // console.log(setToArray)
            if(setToArray.length){
                setToArray.forEach((el) => {
                  if (el) {
                    return Temperament.findOrCreate({
                      where: {
                        name: el,
                      },
                    });
                  }
                });
            }
            Temperament.findAll()
              .then((resp) => res.status(200).json(resp))
              .catch(() => res.status(404).send('Error to load temperaments into the data base'));
        } else {
            return res.status(404).send('No dogs');
        }
    })
    .catch((err) => next(err))
};


module.exports = getTemperaments