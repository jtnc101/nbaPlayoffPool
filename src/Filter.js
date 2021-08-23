import React from 'react';
import  './App.css';
import { useDispatch } from 'react-redux';
import { updateFilterList } from './actions';
import FilterCSS from './Filter.module.css';

const Filter = ()=> {

    const dispatch = useDispatch();

    const updateFilter = (event) => { 

        if (event.target.value === "injuredPlayer") {
            alert("Off season, no injured players.");
            event.target.checked = false;
            return false;
        }
        const injuredPlayers = document.querySelector("#injuredPlayer").checked;
        const teamSelected = document.querySelector("#teamOptions").value;
        const sortBy = document.querySelector("#sortBy").value;
       
        const filterList = { 
            
            injuredPlayers : injuredPlayers,
            teamSelected: teamSelected,
            sortBy: sortBy
        }

        dispatch( updateFilterList(filterList));
        
    }

    return (

        <div >

            
            <label for="injuredPlayer" className={FilterCSS.filterLabel}>Select injured players</label>
            <input type="checkbox" value="injuredPlayer" name="injuredPlayer" id="injuredPlayer" className={FilterCSS.injuredPlayer} onClick={updateFilter}></input>

            <label for="teamOptions" className={FilterCSS.injuredPlayer}>Select Team: </label>
            <select name="teamOptions" className={FilterCSS.teamOptions} id="teamOptions" onChange={updateFilter} >
                <option value="ALL" >ALL</option>
                <option value="ATL" >Atlanta</option>
                <option value="BOS" >Boston</option>
                <option value="BKN" >Brooklyn</option>
                <option value="CHA" >Charlotte</option>
                <option value="CHI" >Chicago</option>
                <option value="CLE" >Cleveland</option>
                <option value="DET" >Detroit</option>
                <option value="IND" >Indiana</option>
                <option value="MIA" >Miami</option>
                <option value="MIL" >Milwaukee</option>
                <option value="NYK" >New York</option>
                <option value="ORL" >Orlando</option>
                <option value="PHI" >Philadelphia</option>
                <option value="TOR" >Toronto</option>
                <option value="WAS" >Washington</option>
                <br/>
                <option value="blank" ></option>
                <option value="DAL" >Dallas</option>
                <option value="DEN" >Denver</option>
                <option value="GSW" >Golden State</option>
                <option value="HOU" >Houston</option>
                <option value="LAC" >LA Clippers</option>
                <option value="LAL" >LA Lakers</option>
                <option value="MEM" >Memphis</option>
                <option value="MIN" >Minnesota</option>
                <option value="NOP" >New Orleans</option>
                <option value="OKC" >Oklahoma City</option>
                <option value="PHX" >Phoenix</option>
                <option value="POR" >Portland</option>
                <option value="SAC" >Sacramento</option>
                <option value="SAS" >San Antonio</option>
                <option value="UTA" >Utah</option>

            </select>

            
            <label for="sortBy" className={FilterCSS.sortLabel} >Sort by: </label>
            <select name="sortBy" className={FilterCSS.sortBy} id="sortBy" onChange={updateFilter}>
                <option value="blank" className={FilterCSS.sortOption}></option>
                <option value="sortByName" className={FilterCSS.sortOption}>name</option>
                <option value="sortByPoints" className={FilterCSS.sortOption}>points</option>
                
            </select>


        </div>
    )
};

export default Filter;