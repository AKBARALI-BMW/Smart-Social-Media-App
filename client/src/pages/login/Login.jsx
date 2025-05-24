import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="brandContainer">
            <h1 className="loginLogo">
              <span className="logoAccent">Akbar Ali</span>
              <span className="logoMain">Social Hub</span>
            </h1>
            <div className="tagline">Where Stories Come Alive</div>
            <span className="loginDesc">
              Connect, share, and discover amazing moments with friends and family. 
              Join the vibrant community of <strong>Akbar Ali Social Hub</strong> - 
              your gateway to meaningful connections and endless possibilities.
            </span>
            <div className="features">
              <div className="feature">
                <span className="featureIcon">🌟</span>
                <span>Share Your Journey</span>
              </div>
              <div className="feature">
                <span className="featureIcon">🤝</span>
                <span>Connect Globally</span>
              </div>
              <div className="feature">
                <span className="featureIcon">💬</span>
                <span>Real-time Chat</span>
              </div>
            </div>
          </div>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            {/* <div className="loginHeader">
              <h2>Welcome Back!</h2>
              <p>Sign in to continue your journey</p>
            </div> */}
            <div className="inputGroup">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="loginInput" 
                required
              />
              <span className="inputIcon">📧</span>
            </div>
            <div className="inputGroup">
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="loginInput"
                required
              />
              <span className="inputIcon">🔒</span>
            </div>
            <div className="loginOptions">
              <label className="rememberMe">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <span className="loginForgot">Forgot Password?</span>
            </div>
            <button className="loginButton">
              <span>Sign In</span>
              <span className="buttonIcon">→</span>
            </button>
            <div className="divider">
              <span>or</span>
            </div>
            <button className="loginRegisterButton">
              <span className="registerIcon">✨</span>
              Create New Account
            </button>
            <div className="socialLogin">
              <p>Quick Login</p>
              <div className="socialButtons">
                <button className="socialBtn google">G</button>
                <button className="socialBtn facebook">f</button>
                <button className="socialBtn twitter">t</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundPattern"></div>
    </div>
  );
}