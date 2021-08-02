import { IS_FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE, ADDING_SMURF, ADD_ERROR } from "../actions";

export const initialState = {
    smurfs: [
        { name: '', nickname: '', position: '', description: ''}
    ],
    isLoading: false,
    error: ''
}

const reducer = (state, action)=> {
    switch(action.type) {
        case(IS_FETCHING):
            return({ 
                ...state, 
                isLoading: true
            })
        case(FETCHING_SUCCESS):
            return({ 
                ...state, 
                isLoading:false, 
                smurfs: action.payload
            })
        case(FETCHING_FAILURE):
            return({ 
                ...state, 
                isLoading:false, 
                error: action.payload
            })
        case(ADDING_SMURF):
            return({ 
                ...state, 
                smurfs: [...state.smurf, { name: action.payload, nickname: action.payload, position: action.payload, description: action.payload}]
            })
        case(ADD_ERROR):
            return({ ...state, error: 'Error: All fields are required for submittion'})
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.