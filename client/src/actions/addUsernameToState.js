import { ADD_USERNAME_TO_STATE } from './index';


export const AddUsernameToState = (username) => dispatch => {
    return dispatch({type: ADD_USERNAME_TO_STATE, payload: username})
}