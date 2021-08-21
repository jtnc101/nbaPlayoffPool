export const addPlayer = (player) => {
    return {
        type: 'ADD',
        payload: player
    }
};

export const minusPlayer = (player) => {

    return {
        type: 'MINUS',
        payload: player
    }
};

export const updateAllNBAPlayers = (playersList) => {
    return {
        type: 'SET_PLAYERS_LIST',
        payload: playersList
    }
};

export const updateFilterList = (filterList) => {
    return {
        type: 'UPDATE_FILTER',
        payload: filterList
    }
}
