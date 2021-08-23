import React from 'react';
import {useState} from 'react';
import PlayerPicked from './PlayerPicked';
import TeamCSS from './Team.module.css';

const Team = () => {

    const defaultPlayersPicked = 8;
    const playersPickedList = new Array(defaultPlayersPicked).fill({});

    const [teamName, changeTeamName] = useState("");

    const handleInput = (e) => {
        changeTeamName(e.target.value);
    }

    const handlePlus = (event)=> {
        const element = event.target;

        if( teamName === "" ){
            //do nothing
            return false;
        }
        element.nextSibling.style.display = "inline-block";
        element.style.display = "none";

        element.previousSibling.previousSibling.style.display = "none";
        element.previousSibling.style.display="inline-block";
        element.previousSibling.innerHTML = teamName;
    }

    const handleEdit = (event) => {

        const element = event.target;

        element.style.display = "none";
        element.previousSibling.style.display = "inline-block";
        element.previousSibling.previousSibling.style.display = "none";
        element.previousSibling.previousSibling.previousSibling.style.display = "inline-block";
    }
    return( 

        <table className={TeamCSS.team}>
            <tr >
                <th colspan="4" className="team-name-header"> 
                    <input type="txt" placeholder="Team Name" className={TeamCSS.teamNameValue} onChange = {handleInput} value={teamName} ></input>
                    <span className={TeamCSS.teamNameHolder} ></span>
                    <i className="fas fa-plus-square" onClick={handlePlus}></i>
                    <i className= "fas fa-edit" onClick={handleEdit} ></i>
                </th>
            </tr>
            <tr className={TeamCSS.titlePlayerTeamPointsBidRow} >
                <th >Player</th>
                <th >Team</th>
                <th >Points</th>
                <th >Bid</th>
            </tr>

            { playersPickedList.map( () => (
                <PlayerPicked />
            ))}
        </table>
    )

};

export default Team;
