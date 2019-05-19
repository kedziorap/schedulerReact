import React from 'react'
import Team from './Team/Team'
import css from './Teams.module.css'
const Teams = props => {
    const toShow =props.teams.filter(el=>el.id!==0);
    const teams = toShow.map(team => 
    <Team 
        key={team.id} 
        name={team.name} 
        remove={props.remove}
        id={team.id}
    />
    );
    return (  
        <div className={css.Teams}>
            <h2>Teams</h2>
            <button className={css.TeamsButton} onClick={props.clear}>Clear list</button>
            <p>Teams in league: <strong>{toShow.length}</strong></p>
            <div>
                {teams}
            </div>
        </div>  
    )
};

export default Teams;