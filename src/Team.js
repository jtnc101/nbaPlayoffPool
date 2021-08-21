import React from 'react';
import {useState} from 'react';
import PlayerPicked from './PlayerPicked';

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

        <table className="team">
            <tr className="team-name-row">
                <th colspan="4" className="team-name-header"> 
                    <input type="txt" placeholder="Team Name" className="team-name-value" onChange = {handleInput} value={teamName} ></input>
                    <span className="team-name-holder" ></span>
                    <i className="fas fa-plus-square" onClick={handlePlus}></i>
                    <i class="fas fa-edit" onClick={handleEdit} ></i>
                </th>
            </tr>
            <tr className="title-playerTeamPointsBidRow" >
                <th className="title-player">Player</th>
                <th className="title-Team">Team</th>
                <th className="title-Points">Points</th>
                <th className="title-Bid">Bid</th>
            </tr>

            { playersPickedList.map( () => (
                <PlayerPicked />
            ))}
        </table>
    )

};

export default Team;
