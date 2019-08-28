import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { ADD_RECEIPT_START, ADD_RECEIPT_SUCCESS, ERROR } from "./index";

export const addNewReceipt = newReceipt => {
  console.log(newReceipt);
  return dispatch => {
    dispatch({ type: ADD_RECEIPT_START });
    axiosWithAuth()
      // Enpoint below is accurate as of 18:00 on back-end README but
      // I receive a 404 error when adding. See notes on addReceipt.js line: 30
      .post(
        "https://receipt-tracker-api.herokuapp.com/users/receipt",
        newReceipt
      )
      .then(res => {
        console.log(res);
        dispatch({ type: ADD_RECEIPT_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR });
      });
  };
};
