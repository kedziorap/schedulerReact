import React from 'react'
import Match from './Match/Match'

const Matchday = props => {
    const matches = props.matches.map((match, id) => <Match key={id} home={match.home} away={match.away} />)
    return (
        <table>
            <thead><tr><td>Kolejka {props.day}</td></tr></thead>
            <tbody>
            {matches}
            </tbody>
        </table>
    );
}

export default Matchday;