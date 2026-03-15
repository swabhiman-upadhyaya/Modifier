const { Router } = require("express");
const authController = require("../controllers/auth.controller")

const router = Router();


/**
 * @route POST /auth/register
 * @description Register a new user
 * @access Public
 */
router.post("/register", authController.registerController)

/**
 * @route POST /auth/login
 * @description Login a user
 * @access Public
 */
router.post("/login", authController.loginUserController)

module.exports = router;