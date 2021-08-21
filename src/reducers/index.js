import allPlayersPicked from "./allPlayersPicked";
import allNBAPlayers from "./allNBAPlayers";
import filterList from "./filterList";

import { combineReducers } from "redux";

const allReducers = combineReducers( 
    {
        allPlayersPicked: allPlayersPicked,
        allNBAPlayers: allNBAPlayers,
        filterList: filterList
    }
);

export default allReducers;

