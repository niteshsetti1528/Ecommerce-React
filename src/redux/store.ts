import { legacy_createStore, Store } from "redux";
import rootReducer from "./cartReducer";

const store: Store = legacy_createStore(rootReducer);

export default store;
