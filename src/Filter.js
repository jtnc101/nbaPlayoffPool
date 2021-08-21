import React from 'react';
import  './App.css';
import { useDispatch } from 'react-redux';
import { updateFilterList } from './actions';

const Filter = ()=> {

    const dispatch = useDispatch();

    const updateFilter = (event) => { 

        if (event.target.value === "injuredPlayer") {
            alert("Off season, no injured players.");
            event.target.checked = false;
            return false;
        }
        const injuredPlayers = document.querySelector(".injured-player").checked;
        const teamSelected = document.querySelector(".teamOptions").value;
        const sortBy = document.querySelector(".sortBy").value;
       
        const filterList = { 
            
            injuredPlayers : injuredPlayers,
            teamSelected: teamSelected,
            sortBy: sortBy
        }

        dispatch( updateFilterList(filterList));
        
    }

    return (

        <div >

            
            <label for="injuredPlayer" className="filter-label">Select injured players</label>
            <input type="checkbox" value="injuredPlayer" name="injuredPlayer" className="filter-checkbox injured-player" onClick={updateFilter}></input>

            <label for="teamOptions" className="filter-label">Select Team: </label>
            <select name="teamOptions" className="teamOptions"  onChange={updateFilter} >
                <option value="ALL" className="team-name">ALL</option>
                <option value="ATL" className="team-name">Atlanta</option>
                <option value="BOS" className="team-name">Boston</option>
                <option value="BKN" className="team-name">Brooklyn</option>
                <option value="CHA" className="team-name">Charlotte</option>
                <option value="CHI" className="team-name">Chicago</option>
                <option value="CLE" className="team-name">Cleveland</option>
                <option value="DET" className="team-name">Detroit</option>
                <option value="IND" className="team-name">Indiana</option>
                <option value="MIA" className="team-name">Miami</option>
                <option value="MIL" className="team-name">Milwaukee</option>
                <option value="NYK" className="team-name">New York</option>
                <option value="ORL" className="team-name">Orlando</option>
                <option value="PHI" className="team-name">Philadelphia</option>
                <option value="TOR" className="team-name">Toronto</option>
                <option value="WAS" className="team-name">Washington</option>
                <br/>
                <option value="blank" className="team-name"></option>
                <option value="DAL" className="team-name">Dallas</option>
                <option value="DEN" className="team-name">Denver</option>
                <option value="GSW" className="team-name">Golden State</option>
                <option value="HOU" className="team-name">Houston</option>
                <option value="LAC" className="team-name">LA Clippers</option>
                <option value="LAL" className="team-name">LA Lakers</option>
                <option value="MEM" className="team-name">Memphis</option>
                <option value="MIN" className="team-name">Minnesota</option>
                <option value="NOP" className="team-name">New Orleans</option>
                <option value="OKC" className="team-name">Oklahoma City</option>
                <option value="PHX" className="team-name">Phoenix</option>
                <option value="POR" className="team-name">Portland</option>
                <option value="SAC" className="team-name">Sacramento</option>
                <option value="SAS" className="team-name">San Antonio</option>
                <option value="UTA" className="team-name">Utah</option>

            </select>

            
            <label for="sortBy" className="sort-label" >Sort by: </label>
            <select name="sortBy" className="sortBy" onChange={updateFilter}>
                <option value="blank" className="sort-option"></option>
                <option value="sortByName" className="sort-option">name</option>
                <option value="sortByPoints" className="sort-option">points</option>
                
            </select>


        </div>
    )
};

export default Filter;