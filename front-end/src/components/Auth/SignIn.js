import React, { useState } from "react";

import './styles.css';

const Auth = () => {

    const [isSignUp, setIsSignUP] = useState(false);

    const switchMode = () => {
        setIsSignUP((prevState) => !prevState);
    }

    return(
        <>
            <div class="contact">
                <div class="head">
                    <h3>{(isSignUp) ? 'Sign Up' : 'Sign In'}</h3>
                    <i class="fa fa-comment fa-lg"></i>
                </div>
                <form>
                    {(isSignUp) && (
                        <>
                            <label>Name</label>
                            <input type="text" placeholder="Enter Your Name"/>
                        </>
                    )}
                    
                    <label>Email</label>
                    <input type="email" placeholder="Enter Your Email"/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter Your Password"></input>

                    <p onClick={switchMode} className="msg" style={{height: '20px', width: '230px'}}>{(isSignUp) ? 'Have an Account already? Sign In' : 'Dont have an account? Sign Up'}</p>
                    <button type="button">{(isSignUp) ? 'Sign Up' : 'Sign In'}</button>
                </form>
            </div>
        </>
    );
}

export default Auth;