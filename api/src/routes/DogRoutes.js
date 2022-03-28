const { Router } = require("express");
const router = Router();
const { getDogs, getDogById, postDog, deleteDog } = require('../controllers/DogFunctions.js');


router.get('/dogs', getDogs);

router.get('/dogs/:id', getDogById);

router.post('/dog', postDog);

router.delete('/dog/delete/:id', deleteDog);


module.exports = router;















// router.get('/dog/filterCreation/:payload', async (req, res, next) => {
//     const { payload } = req.params;
//     try {
//         const allData = await allInfo()
//         const filter =
//         payload === 'created' 
//         ? allData.filter(el => el.createdInDB)
//         : allData.filter(el => !el.createdInDB)
//         filter.length 
//         ? res.json(payload === 'all' ? allData : filter)
//         : res.sendStatus(404, 'No filters found')
//     } catch(err){
//         next(err)
//     }
// })

// router.get('/dog/filterTemps/:payload', async (req, res, next) => {
//     const { payload } = req.params;
//     try {
//         const data = await allInfo()
//          const tempsFiltered =
//            payload === "allTemps"
//              ? data
//              : data.filter((dog) => {
//                  if (dog.createdInDB) {
//                      const validateTemp = dog.temperaments.length
//                      ? dog.temperaments.find((el) => el.name === payload)
//                      : payload === "No temperaments";
//                      return validateTemp;
//                     } else {
//                         return dog.temperament?.includes(payload);
//                     }
//                 });
//                 // console.log(tempsFiltered) // array de objetos con la cantidad de perros que tienen dicho temperamento
//                 tempsFiltered.length ? res.json(tempsFiltered) : res.send('No temps found')
//     } catch(err){
//         next(err)
//     }
// })


// router.put('/dog/updateDog/:id', async (req, res, next) => {
//     const { id } = req.params;
//     const { name, heightMin, heightMax, weightMin, weightMax, life_span } = req.body;
//     try{
//         const updateDog = await Dog.update({
//             name, 
//             heightMin, 
//             heightMax, 
//             weightMin, 
//             weightMax, 
//             life_span,
//         }, {
//             where: { id: id }
//         })
//         res.status(200).json(updateDog)

//     } catch(err){
//         next(err)
//     }

// })


// router.put('/dog/updateTemp', async (req, res, next) => {
//     // const { overwrite } = req.query;
//     const { idDog, idTemp } = req.body;
//     try {
//         if(idDog && idTemp){
//             const dog = await Dog.findByPk(idDog)
//             // overwrite 
//             res.json(await dog.setTemperaments(idTemp))
//             // : res.json(await dog.addTemperaments(idTemp))
//        } else {
//            return res.send('Data missing')
//        }
//     } catch(err){
//         next(err)
//     }
// })