import React from 'react'
import css from './Team.module.css'
const Team = props => (
    <div className={css.Team}>
        {props.name} <span><button className={css.TeamButton} onClick={()=>props.remove(props.id)}>Delete</button></span>
    </div>
);

export default Team;