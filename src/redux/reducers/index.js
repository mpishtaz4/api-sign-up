import { combineReducers } from "redux";
import favoritesReducer from "./FavoritesReducer";
import searchReducer from "./SearchReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
