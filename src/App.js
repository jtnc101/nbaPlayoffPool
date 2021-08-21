
import './App.css';
import Team from './Team';
import {useState,useEffect} from 'react';
import Filter from './Filter'
import Players from './Players';
import {EasybaseProvider, useEasybase} from 'easybase-react';
import ebconfig from './ebconfig';




function App() {
  const defaultNumberOfTeams = 4;
  const [listOfTeams, setListOfTeams] = useState( new Array(defaultNumberOfTeams).fill( <Team /> ) );
  // const [listOfTeams, setListOfTeams] = useState( [ 
  const handleAddTeam = (e) => {
    setListOfTeams( [...listOfTeams, <Team /> ])
  };

  const handleMinusTeam = (e) => {
    listOfTeams.splice(listOfTeams.length-1, 1);
  
    const newList = new Array(listOfTeams.length).fill({});
    for( let i=0; i < newList.length; i++ ) {
      newList[i] = listOfTeams[i];
    }

    // new array needed because setListOfTeams won't reconcilliate if given same array regardless of changes.
    setListOfTeams( newList );
    
  }

  return (
    <div className="App">
      <EasybaseProvider ebconfig={ebconfig}>
        <header className="header">NBA Playoff's Pool</header>

        <div className="team-container">
          { listOfTeams }
        </div>
        
        <div className="add-team-container">

          <span className="add-team-label">ADD TEAM</span>
          <i onClick={handleAddTeam} class="fas fa-plus-circle"></i>
        </div>

        <div className="minus-team-container" >
          <span className="minus-team-label">MINUS TEAM</span>
          <i class="fas fa-minus-circle" onClick={handleMinusTeam}></i>
        </div>

        <div className="filter-container" >
            <Filter />

            
            <Players />
            
            
        </div>
        </EasybaseProvider>
    </div>
  );
}

export default App;
