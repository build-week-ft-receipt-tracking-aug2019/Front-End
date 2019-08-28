import { axiosWithAuth } from '../utilities/axiosWithAuth';
import {DELETE_RECEIPT_SUCCESS, ERROR} from './index';
import {getReceipts} from './getReceipts';

export const deleteReceipt = id => dispatch => {
        console.log('does this log?');
        axiosWithAuth()
            .delete(`https://receipt-tracker-api.herokuapp.com/users/receipt/${id}`)
            .then(res => {
                console.log("delete response===",res);
                dispatch({ type: DELETE_RECEIPT_SUCCESS });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: ERROR });
            })
    }




    // return dispatch => {
    //     console.log('does this log?');
    //     //axiosWithAuth()
    //     axios
    //         .delete(`https://receipt-tracker-api.herokuapp.com/users/receipt/${id}`, {
    //             headers: {authorization: localStorage.getItem('token')}
    //         })
    //         .then(res => {
    //             console.log("delete response===",res);
    //             dispatch({ type: DELETE_RECEIPT_SUCCESS });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             dispatch({ type: ERROR });
    //         })
    // }