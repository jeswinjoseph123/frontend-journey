import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //basic validation

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are important" });
    }

    //check user exists already

    const existing = await User.findOne({ email: email.toLowerCase() });

    if (existing) {
      return res.status(400).json({ message: "user already exist" });
    }

    //user create

    const createUser = await User.create({
      username,
      email: email.toLowerCase(),
      password,
      loggedIn: false,
    });

    res.status(201).json({
      message: "User Register Succesfully",
      user: {
        id: createUser._id,
        email: createUser.email,
        username: createUser.username,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    //checking user already exist
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email.toLowerCase(),
    });
    if (!user)
      return res.status(400).json({
        message: "User not found ",
      });

    //comapre password
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    res.status(200).json({
      message: "User Logged In Succesfully",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    const { email } = req.body;
    //
    const user = await User.findOne({
      email: email.toLowerCase(),
    });
    if (!user)
      return res.status(400).json({
        message: "User not Found",
      });
    res.status(200).json({
      message: "User logged Out Successfullly",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
};

export { registerUser, loginUser, logoutUser };
