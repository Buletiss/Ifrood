import { createStore } from 'redux';
import combineReducers from './modules/rootReducer';

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(combineReducers, enhancer);

export default store;
