import React from 'react'
import Aux from '../../../../hoc/Auxiliry'
import css from './Match.module.css'

const Match = props => {
    const home = props.teams.find(el => el.id === props.home);
    const away = props.teams.find(el => el.id === props.away);
    let result;
    if (home && away) {
        result = <tr className={css.Match}>
            <td>{home.name}</td>
            <td>-</td>
            <td>{away.name}</td>
        </tr>
    } else if (!home && away) {
        result=<tr><td colSpan="3">pause: <strong>{away.name}</strong> </td></tr>
    }  else if (!away && home){
        result=<tr><td colSpan="3">pause: <strong>{home.name}</strong> </td></tr>
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