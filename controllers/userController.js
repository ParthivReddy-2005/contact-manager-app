const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
//@desc Register a user
//@route POST /api/users/register
//@public access

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("all fields are mandatory!");
  }
  const userAvialable = await User.findOne({ email });
  if (userAvialable) {
    res.status(400);
    throw new Error("user already Registred");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashed password : ", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`user created : ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("user data is not valid");
  }
  res.json({ message: "Register the user" });
});

//@desc Register a user
//@route POST /api/users/register
//@public access

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("all fields are mandatory!");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("email or password is not valid");
  }
});

//@desc Register a user
//@route POST /api/users/register
//@public access

const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
