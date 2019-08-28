import { axiosWithAuth } from '../utilities/axiosWithAuth';
import {DELETE_RECEIPT_SUCCESS, ERROR} from './index';
import {getReceipts} from './getReceipts';

export const deleteReceipt = id => {
    console.log(id)
    return dispatch => {
        axiosWithAuth()
            .delete(`https://receipt-tracker-api.herokuapp.com/users/receipt/${id}`)
            .then(res => {
                console.log(res);
                getReceipts();
                dispatch({ type: DELETE_RECEIPT_SUCCESS });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ERROR });
            })
    }
};