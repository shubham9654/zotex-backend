const ImageModal = require("../models/image.modal");

const getImage = async (req, res) => {
  try {
    const image = await ImageModal.findById(req.params.id);
    if (!image) {
      res.status(404).send("Image not found");
    } else {
      res.set("Content-Type", image.contentType);
      res.send(image.data);
    }
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getImage,
};
