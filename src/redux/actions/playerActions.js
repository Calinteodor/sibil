import * as types from './actionTypes';

export function addPlayer(player) {
 return { type: types.ADD_PLAYER, player: player}
}