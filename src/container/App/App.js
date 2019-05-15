import React, { Component } from 'react'
import Teams from '../../components/Teams/Teams'
import Form from '../../components/Form/Form'
import Aux from '../../hoc/Auxiliry'
import TimeTable from '../../components/TimeTable/TimeTable'

class App extends Component {
    state = {
        teams: [
            {id: 1, name: 'Juventus'},
            {id: 2, name: 'Barcelona'},
            {id: 3, name: 'Manchester City'},
            {id: 4, name: 'Bayern'}
        ],
        testSchedule: [
            [
                {home: 1, away: 4},
                {home: 2, away: 3}
            ],
            [
                {home: 4, away: 3},
                {home: 1, away: 2}
            ],
            [
                {home: 2, away: 4},
                {home: 3, away: 1}
            ],
        ],
        schedule: [],
        isScheduled: false
    }
    render() {
        return (
            <Aux>
                <Form/>
                <Teams teams={this.state.teams}/>
                <TimeTable schedule={this.state.testSchedule}/>
            </Aux>
        )
    }
}

export default App;
