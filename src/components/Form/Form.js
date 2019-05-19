import React from 'react'
import css from './Form.module.css'
const Form = props => (
    <div className={css.Form}>
        <h2>Add team</h2>
        <input type="text" value={props.text} onChange={props.changer} onKeyPress={props.showKey} placeholder="Team"/>
        <button onClick={props.add}>Add</button>
    </div>
);

export default Form;