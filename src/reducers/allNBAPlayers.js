const allNBAPlayers = (state=[], action) => {

    switch (action.type) {
        case 'SET_PLAYERS_LIST' :
            return action.payload;
        default:
            return state;
    }

};

export default allNBAPlayers;