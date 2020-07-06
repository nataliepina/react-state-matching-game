import React from 'react';
import './Button.css';

const Button = (props) => ( <button onClick={props.startGame}>{playing ? 'reset' : 'start'}</button> )

export default Button
