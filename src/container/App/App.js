import React, { Component } from 'react'
import Teams from '../../components/Teams/Teams'
import Form from '../../components/Form/Form'
import Aux from '../../hoc/Auxiliry'
import TimeTable from '../../components/TimeTable/TimeTable'

class App extends Component {
    state = {
        teams: [1,2,3,4,5,6],
        teamsInGame: [
            {id: 1, name: 'Juventus'},
            {id: 2, name: 'Barcelona'},
            {id: 3, name: 'Manchester City'},
            {id: 4, name: 'Bayern'},
            {id: 5, name: 'PSG'},
            {id: 6, name: 'Ajax'},
        ],
        testSchedule: [
            [
                {home: 1, away: 6},
                {home: 2, away: 5},
                {home: 3, away: 4}
            ],
            [
                {home: 6, away: 4},
                {home: 5, away: 3},
                {home: 1, away: 2}
            ],
            [
                {home: 2, away: 6},
                {home: 3, away: 1},
                {home: 4, away: 5}
            ],
            [
                {home: 6, away: 5},
                {home: 1, away: 4},
                {home: 2, away: 3}
            ],
            [
                {home: 3, away: 6},
                {home: 4, away: 2},
                {home: 5, away: 1}
            ]
            
        ],
        schedule: [[{a:'chuj'}],[],[],[],[]],
        isScheduled: false
    }
    generateMatchdays = () => {
        const amountTeam = this.state.teams.length - 1;
        const schedule = [];
        for (let i = 0; i < amountTeam; i++) {
            schedule.push([]);
        }
        console.log(schedule);
    }
    evenMatchday = () => {
        const schedule = this.state.schedule.map(arr => arr.map(match => Object.assign({}, match)));
        const amountTeam = this.state.teams.length;
        const home = this.state.teams.slice(0, amountTeam/2);
        const away = this.state.teams.slice(amountTeam/2).reverse();
        home.unshift(away.shift());
        away.push(home.pop());
        this.setState({teams: [...home, ...away]})
    }
    oddMatchday = () => {
        const schedule = this.state.schedule.map(arr => arr.map(match => Object.assign({}, match)));
        const amountTeam = this.state.teams.length;
        const home = this.state.teams.slice(0, amountTeam/2);
        const away = this.state.teams.slice(amountTeam/2).reverse();
        this.addMatchToMatchday(home, away, 0, schedule);
        for (var i = 2; i < amountTeam; i+=2) {
            away.splice(1,0, home.shift());
            home.push(away.pop());
            this.addMatchToMatchday(home, away, i, schedule);
        }
        this.setState((prevState, state)=>({schedule}))
    }
    addMatchToMatchday = (homeTeam, awayTeam, nrMatchday, schedule ) => {
        //const schedule = this.state.schedule.map(arr => arr.map(match => Object.assign({}, match)));
        const matchDay = [];
        for (var i = 0; i < homeTeam.length; i++) {
            matchDay.push({home: homeTeam[i],away: awayTeam[i]});
        }
        schedule[nrMatchday]=matchDay;
        console.log('schedule', schedule);
    }
    render() {
        return (
            <Aux>
                <Form/>
                <Teams teams={this.state.teamsInGame}/>
                <button onClick={this.oddMatchday}>Generate schedule</button>
                <TimeTable schedule={this.state.schedule} teams={this.state.teamsInGame}/>
            </Aux>
        )
    }
}

export default App;
