import React from 'react';
import classes from './Input.module.css'


const MyInput = function (props) {
    return (
        <input {...props} className={classes.input} ></input>
    );
};

export default MyInput;