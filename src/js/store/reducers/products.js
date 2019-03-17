import * as actions from "../constants/products";

const initState = {
    list: [],
    details: null,
    error: null,
    listLoading: false,
    detailsLoading: false,
};

export default function(state = initState, action) {
    switch (action.type) {
    case actions.GET_LIST_REQ:
        return {
            ...state,
            listLoading: true,
            error: null,
        };
    case actions.GET_LIST_SUCCESS:
        return {
            ...state,
            listLoading: false,
            list: action.payload,
        };
    case actions.GET_DETAILS_REQ:
        return {
            ...state,
            detailsLoading: true,
            error: null,
            details: null,
        };
    case actions.GET_DETAILS_SUCCESS:
        return {
            ...state,
            detailsLoading: false,
            details: action.payload,
        };

    case actions.GET_DETAILS_ERROR:
    case actions.GET_LIST_ERROR:
        return {
            ...state,
            error: action.payload,
        };

    default:
        return state;
    }
}
