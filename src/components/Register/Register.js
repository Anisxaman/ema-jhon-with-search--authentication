import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import "./Regiaster.css"

const Register = () => {
    const {user,signInUsingGoogle}=UseAuth();
    return (
        <div className="register-form">
            <div>
                <h2>Register: Create Account</h2>
                <form action="" onSubmit="">
                    <input type="email" placeholder="name" />
                    <br />
                    <input type="password"  placeholder="password" />
                    <br />
                    <input type="submit" value="submit" />

                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <br />
                <button onClick={signInUsingGoogle} className="btn  btn-primary"> Google Sign In</button>

            </div>
        </div>
    );
};

export default Register;