import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Hub</h3>
          <span className="loginDesc">
          Begin Your Digital Journey
           </span>
            <span className="registerDesc">
              Join thousands of users who trust <strong>Akbar Ali Social Hub</strong> 
              for authentic connections and meaningful conversations. Create your account 
              today and become part of our growing community where every voice matters.
            </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
              <div style={{textAlign:"center"}} className="registerHeader">
              <h2 >Create Account</h2>
              <p >Join the community today!</p>
            </div>
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
