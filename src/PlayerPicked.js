import React from 'react';
import {useState} from 'react';
import './App.css';
import { addPlayer,minusPlayer } from './actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {useEasybase} from 'easybase-react';

const PlayerPicked = ()=> {
    

    const {db} = useEasybase();

    const dispatch = useDispatch();

    const [playerName, setPlayerName] = useState('');

    const playersPicked = useSelector( state => state.allPlayersPicked);

    const handlePlayerName = (e) => {
        setPlayerName(e.target.value);

    }

    const handleAddPlayer = async (e) => {

        
        
        // can't add player if already picked.

        if (playersPicked.includes(playerName) ){
            alert('player already picked. Try again');
            return false;
        }

        // can't add player if name isn't available in players' list.

        const data = await db("NBA PLAYERS STATS").return().where( { name: playerName}).one();

        console.log(data);
        if( Object.keys(data).length === 0 ){
            alert("no such player exists. Enter first and last name.");
            return false;
        }

        const element = e.target;

        if( element.previousSibling.previousSibling.value === "" ) {
            // adding empty string player has no consequences.
            return false;
        }

        element.style.display = 'none';
        element.nextSibling.style.display='inline-block';

        

        dispatch( addPlayer( playerName ));
        element.previousSibling.innerHTML = playerName;
        element.previousSibling.style.display = 'inline-block';
        element.previousSibling.previousSibling.style.display='none';

        // update chosen player's team in our ui table

        element.parentElement.nextSibling.innerHTML = data.team;
    }

    const handleEditPlayer = (e) => {

        const element = e.target;
        const player = element.previousSibling.previousSibling.innerHTML;

        element.previousSibling.style.display = 'inline-block';
        element.style.display='none';

        element.previousSibling.previousSibling.style.display = 'none';
        element.previousSibling.previousSibling.previousSibling.style.display = 'inline-block';
        
        dispatch( minusPlayer(player));

        element.parentElement.nextSibling.innerHTML = "";
    }

    const handleAddBid = (event) => {

        const element = event.target;

        element.style.display = "none";
        element.nextSibling.style.display = "inline-block";
        
        element.previousSibling.style.display = "inline-block";
        element.previousSibling.innerHTML = element.previousSibling.previousSibling.value;
        element.previousSibling.previousSibling.style.display = "none";
    }

    const handleEditBid = (event) => {
        const element = event.target;

        element.style.display = "none";
        element.previousSibling.style.display = "inline-block";
        element.previousSibling.previousSibling.style.display = "none";
        element.previousSibling.previousSibling.previousSibling.style.display = "inline-block";
    }
    return (
        <tr className="player-picked-row">
            <td className="player-picked-name player-picked-data" >
                <input type="txt" placeholder="player name" value={playerName} onChange={handlePlayerName} className="player-picked-input"></input>
                <span className="player-name-holder"></span>
                <i className="fas fa-plus-square" onClick={handleAddPlayer}></i>
                <i class="fas fa-edit" onClick={handleEditPlayer}></i>
            </td>
            <td className="player-picked-team player-picked-data" >
                
            </td>
            <td className="player-picked-points player-picked-data">
                0
            </td>
            <td className="player-picked-bid player-picked-data">
                <input type="txt" placeholder="0" className="bid-input" />
                <span className="bid-holder"></span>
                <i className="fas fa-plus-square" onClick={handleAddBid}></i>
                <i class="fas fa-edit" onClick={handleEditBid} ></i>
            </td>

        </tr>
    )
};

export default PlayerPicked;