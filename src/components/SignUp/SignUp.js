import React, { useState } from 'react';
import './sign-up.scss';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState(["", true]);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        const email = e.target.value;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (!email) {
            setErrorMessage([
                "Email is Required", true
            ])
        } else {
            resetErrorMessage();
        }
        if (!emailRegex.test(email)) {
            setErrorMessage([
                "Please enter a valid email", true
            ])
        } else {
            resetErrorMessage();
        }

        setValue(email);
    }

    const resetErrorMessage = () => {
        setErrorMessage("", false)
    }

    return (
        <div className="sign-up-container">
            <div className="sign-up-wrapper">
                <h3 className="heading">Sign up for<br /> exclusive access.</h3>
                <div className="input-message">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={value}
                        onChange={(e) => handleChange(e)}
                        className="sign-up-input"
                        placeholder="Your email address"
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
                <a
                    className={"submit-btn " + (errorMessage && errorMessage.length && "disabled")}
                    href={errorMessage[0] && errorMessage[1] ? "#" : "https://app.loch.one/welcome"}
                >
                    Get started
                </a>
                <p className="message">You’ll receive an email with an invite link to join.</p>
            </div>
        </div>
    )
}


export default SignUp;
