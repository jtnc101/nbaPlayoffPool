import React from 'react';
import { useEffect,useState } from 'react';
import {useEasybase} from 'easybase-react';
import PlayerStats from './PlayerStats';
import { useDispatch } from 'react-redux';
import { updateAllNBAPlayers } from './actions';
import { useSelector } from 'react-redux';


const Players = () => {
    const {Frame, sync, configureFrame,db} = useEasybase();


    const [playersList, changePlayersList] = useState([]);
    const [filteredList, changeFilteredList] = useState([]);

    const usedispatch = useDispatch();

    const filter = useSelector(state => state.filterList);

    const runFilter = async (  ) => {
        let listToFilter;

         
        if( filter.teamSelected !== "" && filter.teamSelected !== "blank" && filter.teamSelected !== undefined && filter.teamSelected !== "ALL") {
            if( filter.sortBy === "sortByName") {
                listToFilter = await db("NBA PLAYERS STATS").return().where({team: filter.teamSelected}).orderBy({by: "name", sort: "asc"}).all();
            } else {
                listToFilter = await db("NBA PLAYERS STATS").return().where({team: filter.teamSelected}).orderBy({by: "points", sort: "desc"}).all();
            }
        } else {
            if( filter.sortBy === "sortByName" ) {
              // listToFilter = playersList;
              listToFilter = await db("NBA PLAYERS STATS").return().orderBy({by: "name", sort: "asc"}).all();
            } else {
              listToFilter = await db("NBA PLAYERS STATS").return().orderBy({by: "points", sort: "desc"}).all();
            }
        }
        
        changeFilteredList(listToFilter);
    }

    const loadTable = async () => {
       

        // check if table needs to be filled. 
        const returnedValue = await db("NBA PLAYERS STATS").return().all();
        
        changePlayersList(returnedValue);
        
        usedispatch(updateAllNBAPlayers(returnedValue));

        runFilter();

        if  ( !( Object.keys(returnedValue).length === 0 ) ) {

            return;
        }

             

        // www.balldontlie.io has a 60 request per minute limit. Each iteration through the loop will make 2 calls
        // to the website so wait 2+ seconds per 2 calls. 
        const timeout = 2300;

        // number of active nba players
        const lastID = 493;

        for( let i = 1; i<= lastID; i++) {
            
            await new Promise(r => setTimeout(r, timeout));

            const statsReponse = await fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${i}`);
            const statsData = await statsReponse.json();

            if( statsData.data.length === 0 ) {
                
                
                continue;

            }
            const nameResponse = await fetch(`https://www.balldontlie.io/api/v1/players/${i}`);
            const nameData = await nameResponse.json();

            const playerName = nameData.first_name + " " + nameData.last_name;
            const team = nameData.team.abbreviation;

            const gamesPlayed = statsData.data[0].games_played;

            const points = statsData.data[0].pts;

            const rebounds = statsData.data[0].reb;

            const assists = statsData.data[0].ast;

            const steals = statsData.data[0].stl;

            const blocks = statsData.data[0].blk;

            Frame().push( {
                'Name': playerName,
                'Games played': gamesPlayed,
                'Points': points,
                'Rebounds': rebounds,
                'Assists': assists,
                'Steals': steals,
                'Blocks': blocks,
                'Team': team

            });

            
        }

        sync();
        
    }


    useEffect( 
        
        () => {
            configureFrame({ limit: 400, offset: 0});
            sync();
            loadTable();            

        } ,
        []
    );

    
    return (
        <div>
             <button className="filter-button" onClick={runFilter}>FILTER</button>

             <div className="playerstats-title-container">
              <span className="playerstats-title">
                Name
              </span>
              <span className="playerstats-title">
                Team
              </span>
              <span className="playerstats-title">
                Games Played
              </span>
              <span className="playerstats-title">
                Points
              </span>
              <span className="playerstats-title">
                Assists
              </span>
              <span className="playerstats-title">
                Rebounds
              </span>
              <span className="playerstats-title">
                Steals
              </span>
              <span className="playerstats-title">
                Blocks
              </span>
            </div>
                
            {filteredList.map( (element) =>
                <PlayerStats name={element.name} team={element.team} points={element.points} games_played={element.games_played}
                            rebounds={element.rebounds} assists={element.assists} steals={element.steals} blocks={element.blocks} />

               
            )} 





    
        </div>
    );


};

export default Players;
