import { actionType, pageActionsTypes } from "../../types/pageTypes";

const defaultPage: number = 1;

export const pageReducer = (state: number = defaultPage, action: actionType): number => {
    switch(action.type){
        case pageActionsTypes.NEXT_PAGE:
            return state + 1;
        case pageActionsTypes.PREVIOUS_PAGE:
            return state - 1;
        case pageActionsTypes.SELECT_PAGE:
            return action.payload;
        default:
            return state;
    }
}