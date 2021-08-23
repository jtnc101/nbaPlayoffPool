import React from 'react';
import PlayerStatsCSS from './PlayerStats.module.css';

const PlayerStats = ({name,team,points,games_played,rebounds, assists, steals,blocks}) => {

    return (
        <div className={PlayerStatsCSS.playerstatsContainer}>
            <span className={PlayerStatsCSS.playerstatsElement}>{name}</span>
            <span className={PlayerStatsCSS.playerstatsElement}>{team}</span>
            <span className={PlayerStatsCSS.playerstatsElement}>{games_played}</span>
            <span className={PlayerStatsCSS.playerstatsElement}>{points}</span>
            <span className={PlayerStatsCSS.playerstatsElement}>{assists}</span>
            <span className={PlayerStatsCSS.playerstatsElement}>{rebounds}</span>
            <span className={PlayerStatsCSS.playerstatsElement}>{steals}</span>
            <span className={PlayerStatsCSS.playerstatsElement}>{blocks}</span>
        </div>
    )
};

export default PlayerStats;