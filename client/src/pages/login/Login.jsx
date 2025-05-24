import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../components/context/Authcontext";
import { loginCall } from "../../components/context/AuthAction";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  
  const { user, isFetching, error, errorMessage, dispatch } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    // Email validation
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    
    // Password validation
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const result = await loginCall({ email, password }, dispatch);
    
    if (result.success) {
      // Remember user preference
      if (rememberMe) {
        localStorage.setItem("rememberUser", email);
      } else {
        localStorage.removeItem("rememberUser");
      }
      
      navigate("/");
    }
  };

  // Load remembered email on component mount
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberUser");
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  // Clear validation errors when user types
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (validationErrors.email) {
      setValidationErrors({ ...validationErrors, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (validationErrors.password) {
      setValidationErrors({ ...validationErrors, password: "" });
    }
  };

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
                  <p>Sign in to continue your journey</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="loginRight">
          <div className="loginBox">
            <div className="loginHeader">
              <h2>Welcome Back!</h2>
            
            </div>

            {/* Error Message Display */}
            {error && (
              <div className="errorMessage">
                <span className="errorIcon">⚠️</span>
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="inputGroup">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`loginInput ${validationErrors.email ? 'error' : ''}`}
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <span className="inputIcon">📧</span>
                {validationErrors.email && (
                  <span className="validationError">{validationErrors.email}</span>
                )}
              </div>

              <div className="inputGroup">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className={`loginInput ${validationErrors.password ? 'error' : ''}`}
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <span className="inputIcon">🔒</span>
                {validationErrors.password && (
                  <span className="validationError">{validationErrors.password}</span>
                )}
              </div>

              <div className="loginOptions">
                <label className="rememberMe">
                  <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <span className="loginForgot">Forgot Password?</span>
              </div>

              <button 
                type="submit" 
                className="loginButton"
                disabled={isFetching}
              >
                <span>{isFetching ? "Signing In..." : "Sign In"}</span>
                <span className="buttonIcon">→</span>
              </button>
            </form>

            <div className="divider">
              <span>or</span>
            </div>

            <Link to="/register" className="loginRegisterButton">
              <span className="registerIcon">✨</span>
              Create New Account
            </Link>

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