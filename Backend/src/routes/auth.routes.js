const { Router } = require("express");
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")

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

/**
 * @route GET /auth/get-me
 * @description Get the authenticated user's information
 * @access Private
 */
router.get("/get-me", authMiddleware.authUser, authController.getMe);

/**
 * @route POST /auth/logout
 * @description Logout a user
 * @access Private
 */
router.post("/logout", authController.logoutUser);

module.exports = router;