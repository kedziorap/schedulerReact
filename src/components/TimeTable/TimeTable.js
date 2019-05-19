import React from 'react'
import Matchday from './Matchday/Matchday'
import css from './TimeTable.module.css'
const TimeTable = props => {
    const matchdays = props.schedule.map((md, index) => <Matchday key={index} day={index+1} matches={md} teams={props.teams} teamsList={props.teamsList}/>)
    return (
        <div className={css.TimeTable}>
            <h2>Timetable:</h2>
            {matchdays}
        </div>
    )
};

export default TimeTable;