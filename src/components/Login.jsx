import React, { useState } from "react";
import "./SignupPage.css";
import SignupGirl from "../assets/SignUpGirl.png";

export default function LoginOTPPage() {
    const [phone, setPhone] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");

    const sendOtp = () => {
        if (phone.length < 10) {
            alert("Enter valid phone number");
            return;
        }
        setOtpSent(true);
        alert("OTP sent for Login");
    };

    const verifyOtp = () => {
        if (otp.length === 6) {
            alert("Login Successful!");
        } else {
            alert("Invalid OTP");
        }
    };

    return (
        <div className="signup-container">
            {/* LEFT SIDE */}
            <div className="left-side">
                <div>
                    <h1 className="black-color">Welcome Back!</h1>
                    <h4>
                        <i>Login with your Phone No to continue</i>
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

                    {!otpSent ? (
                        <>
                            {/* Google Login */}
                            <button className="social-login">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                                    className="icon"
                                    alt="Google Icon"
                                />
                                Continue with Google
                            </button>

                            <div className="divider"><span></span> or <span></span></div>

                            {/* Phone Number */}
                            <div className="phone-input-box">
                                <div className="country-box">
                                    <img
                                        src="https://flagcdn.com/w20/in.png"
                                        alt="India Flag"
                                        className="flag-icon"
                                    />
                                    <span className="country-code">+91</span>
                                </div>

                                <input
                                    type="text"
                                    placeholder="Phone No"
                                    className="phone-input"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            <button className="signup-btn" onClick={sendOtp}>
                                Send OTP
                            </button>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                className="input"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />

                            <button className="signup-btn" onClick={verifyOtp}>
                                Verify OTP
                            </button>
                        </>
                    )}

                    <p className="login-text">
                        Don’t have an account? <a href="/signup">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
