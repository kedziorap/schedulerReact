import React, { Component } from 'react'
import Teams from '../../components/Teams/Teams'
import Form from '../../components/Form/Form'
import Aux from '../../hoc/Auxiliry'
import TimeTable from '../../components/TimeTable/TimeTable'
import uuid from 'uuid'

class App extends Component {
    state = {
        teams: [],
        teamsInGame: [],
        text: '',
        schedule: [],
        isScheduled: false
    }
    textChangeHandler = event => {
        const text = event.target.value;
        this.setState({text});
    }
    addTeam = ()=> {
        const name = this.state.text;
        const teamsInGame = this.state.teamsInGame;
        const team = {id: uuid.v4(), name: name};
        teamsInGame.push(team);
        this.setState({teamsInGame, text: ''})
    }
    mixIt= (tab) => {
        const toChange = tab.slice();
        const resultTab = [];
        for (let i = 0, size = tab.length; i < size; i++) {
            const draw = Math.floor(Math.random()*toChange.length);
            resultTab.push(toChange[draw]);
            toChange.splice(draw, 1);
        }
        return resultTab;
    }
    setTeamsInSchedule = () => {
        const teamsToGet = this.state.teamsInGame.map(team => team.id);
        if (teamsToGet.length % 2) teamsToGet.push(0)
        const teams = this.mixIt(teamsToGet);
        this.setState({teams}, ()=>this.generateMatchdays())
    }
    generateMatchdays = () => {
        const amountTeam = this.state.teams.length - 1;
        const schedule = [];
        for (let i = 0; i < amountTeam; i++) {
            schedule.push([]);
        }
        this.setState({schedule}, ()=>this.oddMatchday())
    }
    evenMatchday = () => {
        const schedule = this.state.schedule.map(arr => arr.map(match => Object.assign({}, match)));
        const amountTeam = this.state.teams.length;
        const home = this.state.teams.slice(0, amountTeam/2);
        const away = this.state.teams.slice(amountTeam/2).reverse();
        home.unshift(away.shift());
        away.push(home.pop());
        this.addMatchToMatchday(home, away, amountTeam-3, schedule);
        for (var i = amountTeam - 5; i > 0; i -= 2) {
            home.splice(1,0,away.shift());
            away.push(home.pop());
            this.addMatchToMatchday(home, away, i, schedule);
        }
        this.setState({schedule})
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
        this.setState((prevState, state)=>({schedule}), ()=>this.evenMatchday())
    }
    addMatchToMatchday = (homeTeam, awayTeam, nrMatchday, schedule ) => {
        const matchDay = [];
        for (var i = 0; i < homeTeam.length; i++) {
            matchDay.push({home: homeTeam[i],away: awayTeam[i]});
        }
        schedule[nrMatchday]=matchDay;
        //console.log('schedule', schedule);
    }
    render() {
        return (
            <Aux>
                <Form 
                    text={this.state.text} 
                    changer={this.textChangeHandler}
                    add={this.addTeam}
                />
                <Teams teams={this.state.teamsInGame}/>
                <button onClick={this.setTeamsInSchedule}>Generate schedule</button>
                <TimeTable schedule={this.state.schedule} teams={this.state.teamsInGame} teamsList={this.state.teams}/>
            </Aux>
        )
    }
}

export default App;
