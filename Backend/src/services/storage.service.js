const imageKit = require("@imagekit/nodejs");

const client = new imageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadFile({ buffer, filename, folder = "" }) {
  const file = await client.files.upload({
    file: await imageKit.toFile(Buffer.from(buffer)),
    filename: filename,
    folder
  })

  return file;
}

module.exports = {
  uploadFile
}