const {Router} = require("express")
const authMiddleware = require("../middlewares/auth.middleware");

const songController = require("../controllers/song.controller");
const upload = require("../middlewares/upload.middleware")

const router = Router();

router.post("/", upload.single("song"), songController.uploadSong)

router.get("/", songController.getSong)


module.exports = router