import React, {useState, useEffect} from "react";
import Header from '../../common/header/Header';
import { Redirect } from 'react-router-dom';
import './style.scss';
import {FormControlLabel, Checkbox, TextField, Button} from "@material-ui/core";

function LogInPage (){
    const [errors, setErrors] = useState({});
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {

        console.log('didMount');
        return () => {
            console.log('willUnmount')
        }
    },[redirect, errors]);
    //useEffect runs by default after every render of the component.
    //Empty array is added only if the function given to useEffect is run ONCE after the initial render.
    //If you pass params to the empty array, function(callback) will run every-time the params change.

    function handleClick(e) {
        e.preventDefault();
        if(!loginIsValid()) return;

        setRedirect(true);
    }

    function loginIsValid() {
        const passInput = document.getElementById('password'),
            emailInput = document.getElementById('email'),
            errors = {};

        if (!passInput.value) {
            errors.pass = 'Password is required';
            errors.passColor = true;
        }

        if (!emailInput.value) {
            errors.email = 'Email is required';
            errors.emailColor = true;
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    }

    return (
        <>
            {redirect && <Redirect to='/home' />}
            <div className="form-container">
                <Header name="Log In"/>
                <TextField
                    className="form-input"
                    margin="normal"
                    error={errors.emailColor}
                    helperText={errors.email}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                />
                <TextField
                    className="form-input password"
                    margin="normal"
                    error={errors.passColor}
                    helperText={errors.pass}
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                />
                <FormControlLabel
                    className="remember-credentials"
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button className="sign-in-button" color="primary" variant="contained" fullWidth onClick={handleClick}>
                    Submit
                </Button>
            </div>
        </>
    )
}

export default LogInPage


