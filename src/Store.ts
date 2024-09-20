import { writable } from 'svelte/store';
import { PlayerType } from './DirectionPalette';

// Creamos un store para manejar el turno del jugador
export const playerTurn = writable<PlayerType>(PlayerType.michi);
export const defaultMainCount = 30;
export const mainCounter = writable(defaultMainCount);
export const isPausedMainCounter = writable(false);
export const isStopMainCounter = writable(false);

export const michiCounter = writable<Array<number>>([]);
export const robotCounter = writable<Array<number>>([]);

export const numbersWin = writable<Array<number>>([]);

export let succesCases = [
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
    [4,5,6],
    [1,2,3],
    [7,8,9],
];

