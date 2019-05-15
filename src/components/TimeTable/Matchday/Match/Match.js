import React from 'react'

const Match = props => {
    const home = props.teams.find(el => el.id === props.home);
    const away = props.teams.find(el => el.id === props.away);
    console.log(home, away)
    return(
        <tr>
            <td>{props.home}</td>
            <td>vs.</td>
            <td>{props.away}</td>
        </tr>
    );
}

export default Match;