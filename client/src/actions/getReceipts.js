import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { FETCH_RECEIPTS_START, FETCH_RECEIPTS_SUCCESS, ERROR } from './index';

// Todo:
// Connect Dashboard component and call this function upon loggin in

export const getReceipts = props => {
    console.log(props)
    return dispatch => {
        dispatch({ type: FETCH_RECEIPTS_START })
        axiosWithAuth()
            // Will need an endpoint for a specific users receipts 
            .get('https://receipt-tracker-api.herokuapp.com/users/receipts')
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_RECEIPTS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ERROR })
            })
    }
};
