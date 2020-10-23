import * as types from '../actions/actionTypes';

export default function playerReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_PLAYER:
      return[...state, {...action.player}];
    default:
      return state;
  }
}