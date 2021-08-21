const filterList = (state={}, action ) => {

    switch (action.type) {
        case ("UPDATE_FILTER") :
            return action.payload;
        default :
            return state;
    }
}

export default filterList;