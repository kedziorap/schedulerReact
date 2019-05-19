import React, { Component } from 'react'
import Teams from '../../components/Teams/Teams'
import Form from '../../components/Form/Form'
import TimeTable from '../../components/TimeTable/TimeTable'
import uuid from 'uuid'
import css from './App.module.css'
import icon from '../../assets/calendar.png'

class App extends Component {
    state = {
        teams: [],
        teamsInGame: [
        ],
        text: '',
        schedule: [],
        rematch: false,
        isScheduled: false
    }
    toggleCheck =() => {
        this.setState(prev => {return {rematch: !prev.rematch}});
    }
    removeSchedule = () => {
        this.setState({
            schedule: [],
            isScheduled: false
        });
    }
    removeTeam = (id) => {
        const teams = this.state.teamsInGame;
        const teamsInGame = teams.filter(el => el.id !== id);
        this.setState({teamsInGame}, ()=>this.removeSchedule());
    }
    textChangeHandler = event => {
        const text = event.target.value;
        this.setState({text});
    }
    clearTeams = () => {
        this.setState({teamsInGame: [], schedule:[]})
    }
    addTeam = ()=> {
        const name = this.state.text;
        if (name.trim() !== '') {
            const teamsInGame = this.state.teamsInGame.slice();
        const team = {id: uuid.v4(), name: name};
        teamsInGame.push(team);
        this.setState({teamsInGame, text: ''})
        this.removeSchedule()
        }
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
    rematch = () => {
        const teamAmount = this.state.teamsInGame.length;
        const schedule = this.state.schedule.slice();
        const amount = schedule.length;
        for (let i = 0; i < amount; i ++) {
            const matchday = [];
            for (let j = 0; j < teamAmount/2; j++) {
                const match = {
                    home: schedule[i][j].away,
                    away: schedule[i][j].home
                }
                matchday.push(match)
            }
            schedule.push(matchday)
        }
        this.setState({schedule})
   
    }
    setTeamsInSchedule = () => {
        const teamsToGet = this.state.teamsInGame.map(team => team.id);
        if (teamsToGet.length > 1) {
            if (teamsToGet.length % 2) teamsToGet.push(0)
        const teams = this.mixIt(teamsToGet);
        this.setState({teams}, ()=>this.generateMatchdays())
        }
    }
    generateMatchdays = () => {
        const amountTeam = this.state.teams.length - 1;
        const schedule = [];
        for (let i = 0; i < amountTeam; i++) {
            schedule.push([]);
        }
        this.setState({schedule}, ()=>this.oddMatchday())
    }
    showKey = e => {
        if (e.charCode === 13) this.addTeam();
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
        this.setState({schedule}, ()=>{
            if (this.state.rematch) {
                console.log('hej')
                this.rematch();
            }
        })
        
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
    }
    render() {
        return (
            <div className={css.App}>
                <div className={css.Title}>
                    <img src={icon} alt="logo"/>
                    <h1>League Scheduler</h1>
                    <button onClick={this.rematch}>Rmeatch</button>
                </div>
                <div className={css.Half}>
                <Form 
                    text={this.state.text} 
                    changer={this.textChangeHandler}
                    add={this.addTeam}
                    showKey={this.showKey}
                />
                <Teams 
                    teams={this.state.teamsInGame} 
                    remove={this.removeTeam} 
                    clear={this.clearTeams}/>
                </div>
                 <TimeTable
                    toggleRematch={this.toggleCheck}
                    rematch={this.state.rematch}
                    click={this.setTeamsInSchedule}
                    schedule={this.state.schedule} 
                    teams={this.state.teamsInGame} 
                    teamsList={this.state.teams}/>
            </div>
        )
    }
}

export default App;
