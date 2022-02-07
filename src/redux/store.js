import { combineReducers, createStore } from "redux";
import carReducer from "./ducks/cars";



const store = createStore(
    combineReducers({

        car:carReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store 