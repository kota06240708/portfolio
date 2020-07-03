import { combineReducers } from 'redux';

import ExampleReducer from './example';
import GlobalReducer from './global';

import { IStore } from '../types/store';

const reducers = combineReducers<IStore>({
  example: ExampleReducer,
  global: GlobalReducer
});

export default reducers;