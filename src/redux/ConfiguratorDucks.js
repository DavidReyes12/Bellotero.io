// Constants
const initData = {
    Ingredients: 10,
    Employees: 1,
};

// Types
const SET_INGREDIENTS = "SET_INGREDIENTS";
const SET_EMPLOYEES = "SET_EMPLOYEES";

// Reducer
export default function configuratorReducer(state = initData, action){
    switch (action.type) {
        case SET_INGREDIENTS:
            return { ...state, Ingredients: action.payload };
        case SET_EMPLOYEES:
            return { ...state, Employees: action.payload }; 
        default:
            return state;
    }
};

// Actions
export const setIngredients = (val) => (dispatch, getState) => {
    dispatch({
        type: SET_INGREDIENTS,
        payload: val,
    });
};

export const setEmployees = (val) => (dispatch, getState) => {
    dispatch({
        type: SET_EMPLOYEES,
        payload: val,
    });
};