import * as types from './actionTypes';

export function addPlayer(player) {
 return { type: types.ADD_PLAYER, player: player}
}

export function loadPlayers(players) {
 return { type: types.LOAD_PLAYERS, players: players}
}