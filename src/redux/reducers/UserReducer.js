import * as Actions from "../actions";
// import {CLEAR_USER, SET_USER} from "../actions/UserActions"
// import {SET_SEARCH} from "../actions/SearchActions"

const initialUserState = { username: "", id: null, role: "" };

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case Actions.SET_USER:
      return { ...state, username: action.username };
    case Actions.CLEAR_USER:
      return { ...state, username: "" };
    default:
      return state;
  }
}

export default userReducer;
