import './sign-up.scss';

const SignUp = () => {
    return (
        <div className="sign-up-container">
            <div className="sign-up-wrapper">
                <h3 className="heading">Sign up for<br /> exclusive access.</h3>
                <input type="text" className="sign-up-input" placeholder="Your email address" />
                <button type="submit" className="submit-btn">Get started</button>
                <p className="message">You’ll receive an email with an invite link to join.</p>
            </div>
        </div>
    )
}


export default SignUp;
