import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import testimonialReducer from "./testimonialDucks";
import configuratorReducer from "./ConfiguratorDucks";

const rootReducer = combineReducers({
    testimonial: testimonialReducer,
    configurator: configuratorReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}
