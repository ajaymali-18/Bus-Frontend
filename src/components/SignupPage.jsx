import React, { useState } from "react";
import axios from "axios";

import "./SignupPage.css";
import SignupGirl from "../assets/SignUpGirl.png";

export default function SignupPage() {

    const [showPassword, setShowPassword] = useState(false);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Error states
    const [fullNameError, setFullNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateForm = () => {
        let valid = true;

        // Full Name validation
        if (fullName.trim().length < 3) {
            setFullNameError("Full name must be at least 3 characters.");
            valid = false;
        } else {
            setFullNameError("");
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailError("Enter a valid email address.");
            valid = false;
        } else {
            setEmailError("");
        }

        // Password validation
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters.");
            valid = false;
        } else {
            setPasswordError("");
        }

        return valid;
    };

    // Signup function
    const handleSignup = async () => {

        // 1) Validate before sending
        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/api/auth/signup",
                {
                    name: fullName,
                    email: email,
                    password: password
                }
            );

            alert(response.data);
        } catch (error) {
            alert("Something went wrong");
            console.error(error);
        }
    };

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

                    <div className="divider"><span></span> or <span></span></div>

                    {/* Full Name */}
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="input"
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    {fullNameError && <p className="error">{fullNameError}</p>}

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="input"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p className="error">{emailError}</p>}

                    {/* Password */}
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? "🙈" : "👁️"}
                        </span>
                    </div>
                    {passwordError && <p className="error">{passwordError}</p>}

                    {/* Checkbox */}
                    <div className="check-row">
                        <input type="checkbox" />
                        <label>
                            I agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a>
                        </label>
                    </div>

                    {/* Signup Button */}
                    <button className="signup-btn" onClick={handleSignup}>
                        Sign Up
                    </button>

                    <p className="login-text">
                        Already have an account? <a href="#">Sign in</a>
                    </p>
                </div>
            </div>

        </div>
    );
}
