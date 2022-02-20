const fs = require("fs");
const { cloudinary } = require("../config/imageUploader");
const { SUCCESS, FAIL } = require("../helpers/const");

async function uploadToCloudinary(uri64, next) {
  return cloudinary.uploader
    .upload(uri64, { folder: "dev" })
    .then((result) => {
      return {
        status: SUCCESS,
        data: { url: result.url },
      };
    })
    .catch((error) => {
      next(error);
    });
}

module.exports = uploadToCloudinary;
