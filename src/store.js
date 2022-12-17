import { createStore, combineReducers } from "redux";
import taskReducer from "./services/reducers/reducers";

// const rootReducer = combineReducers({
//   taskReducer: taskReducer,
// });

const store = createStore(taskReducer);

export default store;
