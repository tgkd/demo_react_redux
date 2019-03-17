import * as actions from "../actions/products";
import { getList, getDetails } from "../../libs/products";

export function getProductsList() {
    return async dispatch => {
        try {
            dispatch(actions.getListReq());
            const { data } = await getList();
            dispatch(actions.getListSuccess(data));
        } catch (error) {
            dispatch(actions.error(error));
        }
    };
}

export function getProductDetails(id) {
    return async dispatch => {
        try {
            dispatch(actions.getDetailsReq());
            const { data } = await getDetails(id);
            dispatch(actions.getDetailsSuccess(data));
        } catch (error) {
            dispatch(actions.error(error));
        }
    };
}
