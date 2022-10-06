import { addToPageActionType, REFRESH_ADDTOPAGE } from "../../types/addToPageTypes";

const defaultAddToPage: number = 0;

export const addToPageReducer = (state: number = defaultAddToPage, action: addToPageActionType): number => {
    switch (action.type) {
        case REFRESH_ADDTOPAGE:
            return action.payload;
        default:
            return state;
    }
}