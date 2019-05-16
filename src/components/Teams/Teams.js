import React from 'react'
import Aux from '../../hoc/Auxiliry'
import Team from './Team/Team'

const Teams = props => {
    const toShow =props.teams.filter(el=>el.id!==0);
    const teams = toShow.map(team => 
    <Team 
        key={team.id} 
        name={team.name} 

    />
    );
    return (  
        <Aux>
            <h1>Teams</h1>
            <p>Teams in league: {toShow.length}</p>
            <ul>
                {teams}
            </ul>
        </Aux>  
    )
};

export default Teams;