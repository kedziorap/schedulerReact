import React from 'react'
import Matchday from './Matchday/Matchday'
import css from './TimeTable.module.css'
import Aux from '../../hoc/Auxiliry'

const TimeTable = props => {
    const matchdays = props.schedule.map((md, index) => <Matchday key={index} day={index+1} matches={md} teams={props.teams} teamsList={props.teamsList}/>);
    return (
        <div className={css.TimeTable}>
        <button className={css.Button} onClick={props.click} disabled={(props.teams.length < 2) ? true : false}>Generate schedule</button>
        {props.schedule.length ? <Aux>
            <h2>Timetable:</h2>
            {matchdays}
        </Aux>: null}
        </div>
    )
};

export default TimeTable;