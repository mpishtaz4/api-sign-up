import { createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(
  rootReducer // See above
);
// state {search: [], user: {username: "", role: "", id: null}
