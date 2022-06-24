import { combineReducers } from 'redux'; // to combine allreducers in our app
import { persistReducer } from 'redux-persist'; 
import storage from 'redux-persist/lib/storage'; 
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'SaaS-app',
  storage,
  whitelist: ['cart'],
};

const appReducer = combineReducers({
  cart: cartReducer,
});


export default persistReducer(persistConfig, appReducer);