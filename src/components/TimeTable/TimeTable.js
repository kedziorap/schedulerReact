import React from 'react'
import Matchday from './Matchday/Matchday'

const TimeTable = props => {
    const matchdays = props.schedule.map((md, index) => <Matchday key={index} day={index+1} matches={md}/>)
    return (
        <div>
            <h2>Tinetable:</h2>
            {matchdays}
        </div>
    )
};

export default TimeTable;