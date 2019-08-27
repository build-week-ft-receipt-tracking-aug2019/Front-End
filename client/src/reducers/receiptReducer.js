import {
    FETCH_RECEIPTS_START,
    FETCH_RECEIPTS_SUCCESS,
    ADD_RECEIPT_START,
    ADD_RECEIPT_SUCCESS,
    ERROR
} from '../actions/index';

const initialState = {
    isLoading: false,
    error: '',
    data: []
}

export const receiptReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_RECEIPTS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_RECEIPTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        case ADD_RECEIPT_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case ADD_RECEIPT_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
