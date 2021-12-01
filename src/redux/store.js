import { createStore } from "redux";
import venuesReducer from "./venues/reducer";

const store = createStore(venuesReducer)

export default store