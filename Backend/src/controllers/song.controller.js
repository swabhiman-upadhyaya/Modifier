const songModel = require("../models/song.model");
const id3 = require("node-id3")
const storageService = require("../services/storage.service")

async function uploadSong (req, res) {

  const songBuffer = req.file.buffer
  
  const tags = id3.read(songBuffer)



  const songFile = await storageService.uploadFile({
    buffer: songBuffer,
    filename: tags.title + ".mp3",
    folder: "Modify/songs"
  })

  const posterFile = await storageService.uploadFile({
    buffer: tags.image.imageBuffer,
    filename: tags.title + ".jpec",
    folder: "Modify/poster"
  })

}

module.exports = {
  uploadSong
}