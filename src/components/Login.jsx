import React, { useState } from "react";
import "./SignupPage.css";
import SignupGirl from "../assets/SignUpGirl.png";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginOTPPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="signup-container">
            {/* LEFT SIDE */}
            <div className="left-side">
                <div>
                    <h1 className="black-color">Welcome Back!</h1>
                    <h4>
                        <i>Login with your Email to continue</i>
                    </h4>
                </div>

                <img src={SignupGirl} alt="login-img" className="left-img" />
            </div>

            {/* RIGHT SIDE */}
            <div className="right-side">
                <div className="form-box">
                    <div className="close-btn" onClick={() => (window.location.href = "/")}>
                        ✖
                    </div>

                    <h2 className="black-color">Login</h2>

                    <>
                        {/* Email Login */}
                        <button
                            className="social-login"
                            onClick={() => loginWithRedirect()}
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                                className="icon"
                                alt="Email Icon"
                            />
                            Continue with Email
                        </button>

                        <div className="divider"><span></span> or <span></span></div>

                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* Password Input */}
                        <div className="password-box">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <label className="show-pass-label">
                                <input
                                    type="checkbox"
                                    checked={showPassword}
                                    onChange={() => setShowPassword(!showPassword)}
                                />
                                Show Password
                            </label>
                        </div>

                        <button className="signup-btn">
                            Login
                        </button>
                    </>

                    <p className="login-text">
                        Don’t have an account? <a href="/signup">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
