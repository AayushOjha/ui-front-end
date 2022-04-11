import { combineReducers } from 'redux';
// import accountReducer from './accountReducer';
import htmlReducer from './htmlReducer';

const Reducers = combineReducers({
  // account: accountReducer,
  html: htmlReducer,
});

export default Reducers;
