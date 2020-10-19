import React, {useState} from "react";
import { Redirect } from 'react-router-dom';
import './style.scss';
import {FormControlLabel, Checkbox, TextField, Button} from "@material-ui/core";

function LogInPage (){
    const [errors, setErrors] = useState({});
    const [redirect, setRedirect] = useState(false);

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
            <div className="form-container">
                <h1 className="page-title">Log In</h1>
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
                <Button className="log-in-button" color="primary" variant="contained" fullWidth onClick={handleClick}>
                    Submit
                </Button>
            </div>
            {redirect && <Redirect to='/home' />}
        </>
    )
}

export default LogInPage


