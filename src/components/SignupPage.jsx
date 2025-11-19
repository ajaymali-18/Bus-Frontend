// import React from "react";
import React, { useState } from "react";

import "./SignupPage.css";
import SignupGirl from "../assets/SignUpGirl.png";

export default function SignupPage() {

    const [showPassword, setShowPassword] = useState(false);
    return (

        <div className="signup-container">

            {/* LEFT SIDE */}
            <div className="left-side">
                <div>
                    <h1>Learn From World’s<br />Best Instructors<br />Around The World.</h1>
                    <p>Study Online, Learn Online</p>
                </div>

                <img src={SignupGirl} alt="signup girl" className="left-img" />
            </div>

            {/* RIGHT SIDE */}
            <div className="right-side">
                <div className="form-box">

                    <div className="lang">English (USA) ▾</div>

                    <h2>Create Account</h2>

                    {/* Google Login */}
                    <button className="social-login">
                        <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" className="icon" />
                        Continue with Google
                    </button>

                    {/* Facebook Login */}
                    <button className="social-login">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="icon" />
                        Continue with Facebook
                    </button>

                    {/* Divider */}
                    <div className="divider"><span></span> or <span></span></div>

                    {/* Inputs */}
                    <input type="text" placeholder="Full Name" className="input" />
                    <input type="email" placeholder="Email Address" className="input" />
                    {/* <input type="password" placeholder="Password" className="input" /> */}
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input"
                        />
                        <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? "🙈" : "👁️"}
                        </span>
                    </div>


                    {/* Checkbox */}
                    <div className="check-row">
                        <input type="checkbox" />
                        <label>
                            I agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a>
                        </label>
                    </div>

                    {/* Button */}
                    <button className="signup-btn">Sign Up</button>


                    <p className="login-text">
                        Already have an account? <a href="#">Sign in</a>
                    </p>
                </div>
            </div>

        </div>
    );
}
