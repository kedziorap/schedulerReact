import React from 'react'
import Aux from '../../../../hoc/Auxiliry';

const Match = props => {
    const home = props.teams.find(el => el.id === props.home);
    const away = props.teams.find(el => el.id === props.away);
    let result;
    if (home && away) {
        result = <tr>
            <td>{home.name}</td>
            <td>vs.</td>
            <td>{away.name}</td>
        </tr>
    } else if (!home && away) {
        result=<tr><td>Pause: {away.name} </td></tr>
    }  else if (!away && home){
        result=<tr><td>Pause: {home.name} </td></tr>
    } else {
        result = null;
    }
    return(
        <Aux>
            {result}
        </Aux>
    );
}

export default Match;