import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import appReducer from './appReducer';

// to connect redux state with redux dev tools for our broswer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(applyMiddleware()));

const persistor = persistStore(store);

export { store, persistor };