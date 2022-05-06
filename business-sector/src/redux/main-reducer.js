import { mainAPI } from "../api/api";

const SET_USER_ID = 'SET_USER_ID'
const SET_ID = 'SET_ID'
const SET_TITLE = 'SET_TITLE'
const SET_BODY = 'SET_BODY'

let initialState = {
    userId: null,
    id: null,
    title: "",
    body: ""
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_ID:
            return {...state, content: action.content}

        case SET_ID:
            return {...state, content: action.content}

        case SET_TITLE:
            return {...state, content: action.content}

        case SET_BODY:
            return {...state, content: action.content}

        default:
            return state;
    }
}

export const setUserId = () => ({type: SET_USER_ID})
export const setId = () => ({type: SET_ID})
export const setTitle = () => ({type: SET_TITLE})
export const setBody = () => ({type: SET_BODY})

export const getContent = () => {
    return (dispatch) => {
        mainAPI()
          .then((data) => {
            dispatch(setUserId(false));
            dispatch(setId(data.items));
            dispatch(setTitle(data.items));
            dispatch(setBody(data.totalCount));
          });
      };
}


export default mainReducer