import React, { useState } from "react";
import "./SignupPage.css";
import { useAuth0 } from "@auth0/auth0-react";

import SignupGirl from "../assets/SignUpGirl.png";

export default function SignupOTPPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const { loginWithRedirect } = useAuth0();

    // 🔥 FORM VALIDATION ONLY
    const handleSignup = () => {
        setError("");

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Password validations
        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least 1 uppercase letter.");
            return;
        }

        if (!/[0-9]/.test(password)) {
            setError("Password must contain at least 1 number.");
            return;
        }

        alert("Signup Successful!");
    };

    return (
        <div className="signup-container">

            {/* LEFT SIDE */}
            <div className="left-side">
                <div>
                    <h1 className="black-color">Looks like you're new here!</h1>
                    <h4>
                        <i>Sign up with your details to get started</i>
                    </h4>
                </div>

                <img src={SignupGirl} alt="signup girl" className="left-img" />
            </div>

            {/* RIGHT SIDE */}
            <div className="right-side">
                <div className="form-box">
                    <div className="close-btn" onClick={() => (window.location.href = "/")}>
                        ✖
                    </div>

                    <h2 className="black-color">Create Account</h2>

                    {/* Email Login */}
                    <button
                        className="social-login"
                        onClick={() => loginWithRedirect({ connection: "google-oauth2" })}
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

                    {/* ERROR MESSAGE */}
                    {error && (
                        <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>
                            {error}
                        </p>
                    )}

                    {/* SIGNUP BUTTON */}
                    <button className="signup-btn" onClick={handleSignup}>
                        Sign Up
                    </button>

                    <p className="login-text">
                        Already have an account? <a href="/login">Log in</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
 