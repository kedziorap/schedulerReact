import React from 'react'

const Match = props => (
    <tr>
        <td>{props.home}</td>
        <td>vs</td>
        <td>{props.away}</td>
    </tr>
);

export default Match;