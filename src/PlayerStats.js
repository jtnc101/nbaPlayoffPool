import React from 'react';


const PlayerStats = ({name,team,points,games_played,rebounds, assists, steals,blocks}) => {

    return (
        <div className="playerstats-container">
            <span className="playerstats-element">{name}</span>
            <span className="playerstats-element">{team}</span>
            <span className="playerstats-element">{games_played}</span>
            <span className="playerstats-element">{points}</span>
            <span className="playerstats-element">{assists}</span>
            <span className="playerstats-element">{rebounds}</span>
            <span className="playerstats-element">{steals}</span>
            <span className="playerstats-element">{blocks}</span>
        </div>
    )
};

export default PlayerStats;