import "./login.css"

const Login = () => {
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">HGSocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on HGSocial.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput"></input>
                        <input placeholder="Password" className="loginInput"></input>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;