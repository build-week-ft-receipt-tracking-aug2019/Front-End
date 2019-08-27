import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { ADD_RECEIPT_START, ADD_RECEIPT_SUCCESS, ERROR } from './index';

export const addNewReceipt = newReceipt => {
    console.log(newReceipt)
    return dispatch => {
        dispatch({ type: ADD_RECEIPT_START })
        axiosWithAuth()
            // Will need to fill in endpoint below:
            // https://receipt-tracker-api.herokuapp.com/users/receipt
            .post('https://receipt-tracker-api.herokuapp.com/users/receipts', newReceipt)
            .then(res => {
                console.log(res);
                dispatch({ type: ADD_RECEIPT_SUCCESS });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ERROR });
            })
    }
};
