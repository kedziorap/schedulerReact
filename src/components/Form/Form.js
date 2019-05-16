import React from 'react'

const Form = props => (
    <div>
        <h2>Add team</h2>
        <input type="text" value={props.text} onChange={props.changer}/>
        <button onClick={props.add}>Add</button>
    </div>
);

export default Form;