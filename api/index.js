const express = require("express");
const mongoose = require("mongoose");
const crypto = require("crypto");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000 || 5000;

// Middleware
const corsOptions = {
    origin: "*",
}
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb+srv://MauroShop:mao123mao@cluster0.v5khunf.mongodb.net/", {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });

// Definición de rutas y lógica del servidor...

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const User = require("./models/user");
const Order = require("./models/order");

// endpoints to register user
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Create a new user
    const newUser = new User({ name, email, password });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log("Error registering user:", error);
    res.status(500).send("Error registering user");
  }
});

//endpoint to verify user
app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;
    // Find the user associated with the verification token
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Invalid or expired verification token" });
    }
    // Update the user's verification status to true
    user.verified = true;
    user.verificationToken = undefined;
    await user.save();
    res.status(200).json({ message: "User verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error verifying user" });
  }
});
