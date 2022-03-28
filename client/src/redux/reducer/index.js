import {
    GET_ALL_DOGS,
    GET_DOGS_BY_NAME,
    GET_TEMPERAMENTS,
    GET_DOG_DETAIL,
    FILTER_BY_TEMPERAMENTS,
    FILTER_BY_CREATION,
    ORDER_BY_NAME,
    ORDER_BY_WEIGHT_MIN,
    ORDER_BY_WEIGHT_MAX,
} from "../actions"



const initialState = {
    dogs: [],
    dogsForFiltering: [],
    oneDog: [],
    dogsFromDB: [],
    temperaments: [],
    dogDetail: [],
    filterCreation: [],
    filterTemp: [],
    orderName: [],
    orderWeightMin: [],
    orderWeightMax: []
}



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_DOGS:
        return {
          ...state,
          dogs: action.payload,
          dogsForFiltering: action.payload,
          dogsFromDB: action.payload.filter(el => el.createdInDB)
        };
      case GET_DOGS_BY_NAME:
        return {
            ...state,
            dogs: action.payload,
            oneDog: action.payload
        };
      case GET_TEMPERAMENTS:
        return {
            ...state,
            temperaments: [...action.payload],
        };
      case GET_DOG_DETAIL:
        return {
            ...state,
            dogDetail: action.payload
        };
      case FILTER_BY_TEMPERAMENTS:
        const dogs = state.dogsForFiltering;
        const tempsFiltered =
        action.payload === "allTemps"
        ? dogs
        : dogs.filter((dog) => {
               if (dog.createdInDB) {
                 const validateTemp = 
                 dog.temperaments.length
                 ? dog.temperaments.find((el) => el.name === action.payload)
                 : action.payload === 'No temperaments'
                 return validateTemp
               } else {
                 return dog.temperament?.includes(action.payload);
               }
             });
        return {
          ...state,
          dogs: tempsFiltered,
          filterTemp: tempsFiltered
        };
        case FILTER_BY_CREATION:
            const dogs2 = state.dogsForFiltering;
            const creationFiltered = 
            action.payload === 'created' ? dogs2.filter(el => el.createdInDB) : dogs2.filter(el => !el.createdInDB)
            return {
                ...state,
                dogs: action.payload === 'all' ? dogs2 : creationFiltered,
                filterCreation: action.payload === 'all' ? dogs2 : creationFiltered
            };
        case ORDER_BY_NAME:
            const dogs3 = state.dogsForFiltering;
            const nameFiltered =
              action.payload === "asc"
                ? dogs3.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    else if (b.name > a.name) return -1;
                    return 0;
                  })
                : // desc
                  dogs3.sort((a, b) => {
                    if (a.name > b.name) return -1;
                    else if (b.name > a.name) return 1;
                    return 0;
                  });
            return {
              ...state,
              dogs: nameFiltered,
              orderName: nameFiltered
            };
        case ORDER_BY_WEIGHT_MIN: 
        const dogs4 = state.dogsForFiltering;
        const weightMinFiltered = 
        action.payload === "+WeightMin"
        ? dogs4.sort((a, b) => {
            return b.weightMin - a.weightMin
        })
        // -WeightMin
        : dogs4.sort((a, b) => {
            return a.weightMin - b.weightMin
        })
        return {
          ...state,
          dogs: weightMinFiltered,
          orderWeightMin: weightMinFiltered
        };
        case ORDER_BY_WEIGHT_MAX:
            const dogs5 = state.dogsForFiltering;
            const weightMaxFiltered = 
            action.payload === '+WeightMax'
            ? dogs5.sort((a, b) => {
                return b.weightMax - a.weightMax
            })
            // -WeightMax
            : dogs5.sort((a, b) => {
                return a.weightMax - b.weightMax
            })
            return {
              ...state,
              dogs: weightMaxFiltered,
              orderWeightMax: weightMaxFiltered
            };
      default:
        return state
    }
};


export default rootReducer;
