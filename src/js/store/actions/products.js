import * as actions from "../constants/products";

export function getListReq() {
    return {
        type: actions.GET_LIST_REQ,
    };
}

export function getListSuccess(list) {
    return {
        type: actions.GET_LIST_SUCCESS,
        payload: list,
    };
}

export function getDetailsReq() {
    return {
        type: actions.GET_DETAILS_REQ,
    };
}

export function getDetailsSuccess(details) {
    return {
        type: actions.GET_DETAILS_SUCCESS,
        payload: details,
    };
}

export function error(error) {
    return {
        type: actions.GET_DETAILS_ERROR,
        payload: error,
    };
}
