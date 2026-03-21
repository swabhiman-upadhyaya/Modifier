const {Router} = require("express")
const authMiddleware = require("../middlewares/auth.middleware");

const { uploadSong } = require("../controllers/song.controller");
const upload = require("../middlewares/upload.middleware")

const router = Router();

router.post("/", upload.single("song"), uploadSong)


module.exports = router