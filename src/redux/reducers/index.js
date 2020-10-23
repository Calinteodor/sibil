import { combineReducers } from 'redux';
import players from './playerReducer';

const rootReducer = combineReducers({
  players: players
});

export default rootReducer;