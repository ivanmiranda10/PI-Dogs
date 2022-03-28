import axios from 'axios';

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const FILTER_BY_TEMPERAMENTS = "FILTER_BY_TEMPERAMENTS";
export const FILTER_BY_CREATION = "FILTER_BY_CREATION";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_WEIGHT_MIN = "ORDER_BY_WEIGHT_MIN";
export const ORDER_BY_WEIGHT_MAX = "ORDER_BY_WEIGHT_MAX";


// home for render 
export const getAllDogs = () => {
    return async function(dispatch){
        try {
            const res = await axios.get('http://localhost:3001/dogs')
            // console.log(res.data)
            return dispatch({ type: GET_ALL_DOGS, payload: res.data })
        } catch(err) {
            alert('Error Dogs')
            console.log(err)
        }
    }
};


// searchBar
export const getDogByName = (name) => {
    return function(dispatch){
        return fetch(`http://localhost:3001/dogs?name=${name}`)
        .then((games) => games.json())
        .then((resp) => {
            dispatch({ type: GET_DOGS_BY_NAME, payload: resp });
        })
        .catch((err) => {
            alert('Dog not found')
            console.log(err)
        })
    }
};


// home for filter, form for select
export const getTemperaments = () => {
    return async function(dispatch){
        try {
            const temp = await axios.get("http://localhost:3001/temperament");
            return dispatch({ type: GET_TEMPERAMENTS, payload: temp.data });
        } catch(err) {
            alert('Error Temperaments')
            console.log(err)
        }
    }
};


// dog details
export function getDogDetail(id){
    return (dispatch) => {
        fetch(`http://localhost:3001/dogs/${id}`)
        .then((res) => res.json())
        .then((dog) => {
            dispatch({ type: GET_DOG_DETAIL, payload: dog});
        })
        .catch((err) => {
            alert('Error dog ID')
            console.log(err)
        })
    }
};


export function postDog(payload) {
    return async function(dispatch){
        try {
            const res = await axios.post("http://localhost:3001/dog", payload)
            console.log(res)
            return dispatch({type: "POST_DOG", payload: res.data})
        } catch(err) {
            alert("Error Post")
            console.log(err)
        }
    } 
};


export const deleteDog = (id) => {
    // console.log(typeof(id))
    return async () => {
        try {
            return await axios.delete(`http://localhost:3001/dog/delete/${id}`)
        } catch(err){
            console.log(err)
        }
    } 
}



export const filterByTemperaments = (payload) => {
    // console.log(payload)
    return {
      type: FILTER_BY_TEMPERAMENTS,
      payload
    };
};


export const filterByCreation = (payload) => {
    // console.log(payload)
    return {
      type: FILTER_BY_CREATION,
      payload
    };
};


export const orderByName = (payload) => {
    // console.log(payload)
    return {
      type: ORDER_BY_NAME,
      payload
    };
};


export const orderByWeightMin = (payload) => {
    // console.log(payload)
    return {
      type: ORDER_BY_WEIGHT_MIN,
      payload
    };
};


export const orderByWeightMax = (payload) => {
    // console.log(payload)
    return {
      type: ORDER_BY_WEIGHT_MAX,
      payload
    };
};
