import axios from 'axios';

export const IS_FETCHING = 'IS_FETCHING'
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILURE = 'FETCHING_FAILURE'
export const ADDING_SMURF = 'ADDING_SMURF'
export const ADD_ERROR = 'ADD_ERROR'

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: IS_FETCHING});
        axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response);
            dispatch({ type: FETCHING_SUCCESS, payload: response.data});
        })
        .catch(error => {
            dispatch({ type: FETCHING_FAILURE, payload: error.message});
        })
    }
}

export const addingSmurf = (name, nickname, position, description) => dispatch => {
    dispatch({ type: ADDING_SMURF, payload: name, nickname, position, description})
}

export const addError = () => dispatch => {
    dispatch({ type: ADD_ERROR});
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.