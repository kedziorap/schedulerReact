import React from 'react'
import Aux from '../../hoc/Auxiliry'
import Team from './Team/Team'

const Teams = props => {
    const teams = props.teams.map(team => 
    <Team 
        key={team.id} 
        name={team.name} 

    />
    );
    return (  
        <Aux>
            <h1>Teams</h1>
            <p>Teams in league: {props.teams.length}</p>
            <ul>
                {teams}
            </ul>
        </Aux>  
    )
};

export default Teams;