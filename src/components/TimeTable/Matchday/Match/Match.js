import React from 'react'

const Match = props => {
    const home = props.teams.find(el => el.id === props.home);
    const away = props.teams.find(el => el.id === props.away);
    console.log(home)
    return(
        <tr>
            <td>{home.name}</td>
            <td>vs.</td>
            <td>{away.name}</td>
        </tr>
    );
}

export default Match;