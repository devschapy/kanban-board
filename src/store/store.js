import { createStore } from "redux";
import taskReducer from "./reducers/reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = { key: "persist-key", storage };
const persisReducer = persistReducer(persistConfig, taskReducer);

const store = createStore(persisReducer);
const persistor = persistStore(store);

export default store;
export { persistor };
