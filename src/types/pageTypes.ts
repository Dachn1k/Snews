export enum pageActionsTypes {
    NEXT_PAGE = 'NEXT_PAGE',
    PREVIOUS_PAGE = 'PREVIOUS_PAGE',
    SELECT_PAGE = 'SELECT_PAGE'
}

export type actionType = {
    type: string;
    payload: number
}