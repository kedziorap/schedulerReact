import React from 'react'
import Match from './Match/Match'
import css from './Matchday.module.css'

const Matchday = props => {
    const matchesFromProps = props.matches.slice();
    const find = matchesFromProps.find(el => el.home===0 ||el.away ===0);
    let matchesCheck = [];
    if (find) {
        matchesCheck=matchesFromProps.filter(match => match.home!==0 && match.away!==0);
        matchesCheck.push(find);
    } else {
        matchesCheck = matchesFromProps;
    }
    const matches = matchesCheck.map((match, id) => <Match key={id} home={match.home} away={match.away} teams={props.teams}/>)
    return (
        <table className={css.Table}>
            <thead><tr><td colSpan="3"><h3>Matchday {props.day}</h3></td></tr></thead>
            <tbody>
            {matches}
            </tbody>
        </table>
    );
}

export default Matchday;