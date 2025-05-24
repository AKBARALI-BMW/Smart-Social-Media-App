const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });
    
    if (existingUser) {
      return res.status(400).json({ 
        message: "User with this email or username already exists" 
      });
    }

    // Generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save user and respond
    const user = await newUser.save();
    
    // Remove password from response
    const { password: userPassword, ...userWithoutPassword } = user._doc;
    
    res.status(201).json({
      message: "User registered successfully",
      user: userWithoutPassword
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ 
      message: "Registration failed", 
      error: err.message 
    });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Remove password from response
    const { password: userPassword, ...userWithoutPassword } = user._doc;

    res.status(200).json({
      message: "Login successful",
      user: userWithoutPassword
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ 
      message: "Login failed", 
      error: err.message 
    });
  }
});

module.exports = router;