import { applyMiddleware, combineReducers, createStore } from "redux";
import ServiceReducer from "./reducers/ServiceReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  service: ServiceReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
// const store=createStore(CardReducer);
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
