// Constants
const initData = {
    CurrentMessage: 0,
};

// Types
const SET_CURRENT_MESSAGE = "SET_CURRENT_MESSAGE";

// Reducer
export default function testimonialReducer(state = initData, action){
    switch (action.type) {
        case SET_CURRENT_MESSAGE:
            return { ...state, CurrentMessage: action.payload };  
        default:
            return state;
    }
};

// Actions
export const setCurrentMessage = (val) => (dispatch, getState) => {
    dispatch({
        type: SET_CURRENT_MESSAGE,
        payload: val,
    });
};