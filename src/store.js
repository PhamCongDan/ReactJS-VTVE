import * as history from 'history'
import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import thunk from 'redux-thunk'

export default history.createBrowserHistory();

const thunkMiddleware = [thunk]
export const store = createStore(reducers, applyMiddleware(...thunkMiddleware))