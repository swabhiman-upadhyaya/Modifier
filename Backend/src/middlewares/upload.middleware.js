const multer = require("multer")

const multerStorage = multer.memoryStorage();

const upload = multer({
  storage: multerStorage,
  limits: {
    fileSize: 1024 * 1024 * 10
  }
})

module.exports = upload