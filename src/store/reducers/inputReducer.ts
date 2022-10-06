import { GET_INPUT_VALUE, inputActionType } from "../../types/inputValueTypes";

const defaultInputValue: string = "";

export const inputReducer = (state: string = defaultInputValue, action: inputActionType): string => {
    switch (action.type) {
        case GET_INPUT_VALUE:
            return action.payload;
        default:
            return state;
    }
}