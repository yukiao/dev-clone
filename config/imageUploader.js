const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");
const DatauriParser = require("datauri/parser");
// require("dotenv").config();

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "folderName",
//     format: async () => "png",
//     public_id: (req, file) => file.filename,
//   },
// });
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../", "/uploads/"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

const storage = multer.memoryStorage();

const uploader = multer({ storage: storage });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const parser = new DatauriParser();

const dataUri = (req) => {
  return parser.format(path.extname(req.file.originalname), req.file.buffer);
};

module.exports = {
  uploader,
  cloudinary,
  dataUri,
};
