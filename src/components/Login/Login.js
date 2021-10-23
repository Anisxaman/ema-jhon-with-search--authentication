import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import "./login.css"

const Login = () => {
    const {signInUsingGoogle,user}=UseAuth();

    const history=useHistory();

    // --------------jekhane jaite cassi tar location ta use location a set korte hobe-----------
    const location=useLocation();




    console.log("Came From :" ,location.state?.from);
    const redirectUri=location.state?.from|| "/shop"; //jodi kono location theke na ase direct login r                                                      por home a nia jaoa.











    // --------------usefirebase r signInusing google function ar baki ongso aikhane likha hoiase--------
    const handleGoogleLogin=()=>{
        signInUsingGoogle()
          .then((result) => {
      console.log(result.user);
      history.push(redirectUri);
  
    // setuser(result.user); [module:59-8]
    
  })
    }




    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form className='' action="" onSubmit="">
                    <input type="email" />
                    <br />
                    <input type="password" />
                    <br />
                    <input type="submit" value="submit" />

                </form>
                <p>new to ema-john? <Link to="/register">Create Account</Link></p>
                <br />
                {/* <button onClick={signInUsingGoogle} className="btn  btn-primary"> Google Sign In</button> */}
                <button onClick={handleGoogleLogin} className="btn  btn-primary"> Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;