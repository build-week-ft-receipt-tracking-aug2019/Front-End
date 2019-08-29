import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { ADD_RECEIPT_START, ADD_RECEIPT_SUCCESS, ERROR, ADD_REC_ID_TO_STATE } from './index';

export const addNewReceipt = receiptEdited => {
    console.log(receiptEdited);
    return dispatch => {
        dispatch({ type: ADD_RECEIPT_START });
        axiosWithAuth()
            .put('https://receipt-tracker-api.herokuapp.com/users/receipt', receiptEdited)
            .then(res => {
                console.log(res);
                dispatch({ type: ADD_RECEIPT_SUCCESS});
                dispatch({ type: ADD_REC_ID_TO_STATE, payload: res.data[0]});
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ERROR });
            })
    }
};