const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const blackListModel = require("../models/blacklist.model")

const registerController = async (req, res) => {

  const { username, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({
    $or: [
      { username },
      { email }
    ]
  })

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: "Accout already exist with this email or username"
    })
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash
  })

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d"
    }
  )

  res.cookie("token", token);

  res.status(201).json({
    message: "Account created successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email
    }
  })

}

const loginUserController = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [
      { username },
      { email }
    ]
  }).select("+password")

  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials"
    })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid credentials"
    })
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d"
    }
  )

  res.cookie("token", token);

  res.status(200).json({
    message: "Login successful",
    user: {
      id: user._id,
      username: user.username,
      email: user.email
    }
  })

}

const getMe = async (req, res) => {
  const userId = req.user.id;

  const user = await userModel.findById(userId).select("-password")

  res.status(200).json({
    message: "User fetched successfully",
    user
  })
}

const logoutUser = async (req, res) => {
  const token = req.cookies.token;

  res.clearCookie("token")

  const blacklist = await blackListModel.create({
    token
  })

  res.status(200).json({
    message: "Logout successfully"
  })
}

module.exports = {
  registerController,
  loginUserController,
  getMe,
  logoutUser
}