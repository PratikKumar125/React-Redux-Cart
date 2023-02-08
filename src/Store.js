import {createStore, applyMiddleware, compose} from "redux"
import SingleReducer from "./Reducers/CombinedReducers"
import thunk from "redux-thunk"
import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key:"persist-root",
    storage
}
const persistedReducer = persistReducer(persistConfig, SingleReducer)
const store = createStore(persistedReducer,
                        compose(applyMiddleware(thunk),
                        window.devToolsExtension ? window.devToolsExtension() : f => f)
)
export const persistor = persistStore(store);
export default store;