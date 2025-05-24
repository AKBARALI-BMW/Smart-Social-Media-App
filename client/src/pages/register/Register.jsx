import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../components/context/Authcontext";
import { registerCall } from "../../components/context/AuthAction";
import "./register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const [validationErrors, setValidationErrors] = useState({});
    
  const { isFetching, error, errorMessage, dispatch } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    
    // Username validation
    if (!formData.username) {
      errors.username = "Username is required";
    } else if (formData.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }
    
    // Email validation
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    // Password validation
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords don't match";
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear validation error when user starts typing
    if (validationErrors[e.target.name]) {
      setValidationErrors({
        ...validationErrors,
        [e.target.name]: ""
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        
    if (!validateForm()) {
      return;
    }

    const registerData = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    };

    console.log("Sending registration data:", registerData);

    const result = await registerCall(registerData, dispatch);
        
    if (result.success) {
      alert("Registration successful! Please login.");
      navigate("/login");
    } else {
      console.error("Registration failed:", result.error);
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
            <div className="tagline">Join Our Community</div>
            <span className="loginDesc">
              Create your account and connect with friends and family.
              Begin your digital journey with <strong>Akbar Ali Social Hub</strong> -
              where meaningful connections await.
            </span>
            <div className="features">
              <div className="feature">
                <span className="featureIcon">🌟</span>
                <span>Share Your Story</span>
              </div>
              <div className="feature">
                <span className="featureIcon">🤝</span>
                <span>Build Connections</span>
              </div>
              <div className="feature">
                <span className="featureIcon">💬</span>
                <span>Chat & Connect</span>
                  <p>Join the community today!</p>
              </div>
            </div>
          </div>
        </div>
                
        <div className="loginRight">
          <div className="loginBox">
            <div className="loginHeader">
              <h2>Create Account</h2>
            
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
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  className={`loginInput ${validationErrors.username ? 'error' : ''}`}
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <span className="inputIcon">👤</span>
                {validationErrors.username && (
                  <span className="validationError">{validationErrors.username}</span>
                )}
              </div>
                            
              <div className="inputGroup">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`loginInput ${validationErrors.email ? 'error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span className="inputIcon">📧</span>
                {validationErrors.email && (
                  <span className="validationError">{validationErrors.email}</span>
                )}
              </div>
                            
              <div className="inputGroup">
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className={`loginInput ${validationErrors.password ? 'error' : ''}`}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span className="inputIcon">🔒</span>
                {validationErrors.password && (
                  <span className="validationError">{validationErrors.password}</span>
                )}
              </div>
                            
              <div className="inputGroup">
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className={`loginInput ${validationErrors.confirmPassword ? 'error' : ''}`}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <span className="inputIcon">🔒</span>
                {validationErrors.confirmPassword && (
                  <span className="validationError">{validationErrors.confirmPassword}</span>
                )}
              </div>

              <button
                type="submit"
                className="loginButton"
                disabled={isFetching}
              >
                <span>{isFetching ? "Creating Account..." : "Sign Up"}</span>
                <span className="buttonIcon">→</span>
              </button>
            </form>

            <div className="divider">
              <span>or</span>
            </div>

            <Link to="/login" className="loginRegisterButton">
              <span className="registerIcon">🔑</span>
              Already have an account? Log In
            </Link>
          </div>
        </div>
      </div>
      <div className="backgroundPattern"></div>
    </div>
  );
}