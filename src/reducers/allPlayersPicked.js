

const allPlayersPicked = (state=[],action) => {

    switch (action.type) {
        case 'ADD' :
            return [ ...state, action.payload];
        case 'MINUS' :
            return state.filter( (ele) => { 
                return ele !== action.payload
            });
        default: 
            return state;
    }
};

export default allPlayersPicked;