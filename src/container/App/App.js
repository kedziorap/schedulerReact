import React, { Component } from 'react'
import Teams from '../../components/Teams/Teams'

class App extends Component {
    state = {
        teams: [
            {id: 1, name: 'Juventus'},
            {id: 2, name: 'Barcelona'},
            {id: 3, name: 'Manchester City'},
            {id: 4, name: 'Bayern'},
        ]
    }
    render() {
        return (
            <Teams teams={this.state.teams}/>
        )
    }
}

export default App;
