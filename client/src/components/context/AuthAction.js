// Action creators for authentication

// Login Actions
export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

// Register Actions
export const RegisterStart = () => ({
  type: "REGISTER_START",
});

export const RegisterSuccess = () => ({
  type: "REGISTER_SUCCESS",
});

export const RegisterFailure = (error) => ({
  type: "REGISTER_FAILURE",
  payload: error,
});

// Logout Action
export const Logout = () => ({
  type: "LOGOUT",
});

// Clear Error Action
export const ClearError = () => ({
  type: "CLEAR_ERROR",
});

// API Calls
const API_BASE_URL = "http://localhost:8800/api";

// Login API call
export const loginCall = async (userCredential, dispatch) => {
  dispatch(LoginStart(userCredential));
  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredential),
    });

    const data = await res.json();
        
    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    // Store user in localStorage
    localStorage.setItem("user", JSON.stringify(data.user));
    dispatch(LoginSuccess(data.user));
    return { success: true, data: data.user };
  } catch (err) {
    dispatch(LoginFailure(err.message));
    return { success: false, error: err.message };
  }
};

// Register API call
export const registerCall = async (userCredential, dispatch) => {
  dispatch(RegisterStart());
  try {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredential),
    });

    const data = await res.json();
        
    if (!res.ok) {
      throw new Error(data.message || "Registration failed");
    }

    dispatch(RegisterSuccess());
    return { success: true, data };
  } catch (err) {
    dispatch(RegisterFailure(err.message));
    return { success: false, error: err.message };
  }
};

// Logout function
export const logoutCall = (dispatch) => {
  localStorage.removeItem("user");
  localStorage.removeItem("rememberUser");
  dispatch(Logout());
};