var express = require('express')
var router = express.Router()
const multer = require("multer")
const platController = require("../controllers/platController")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/PlatPictures');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/uploads", upload.single('image'), (req, res) => {
    const { file } = req
    console.log(req.file)
    res.send({
        file: file.originalname,
        path: file.path,
        image: req.file.path,
    })
})

//Create
router.post("/addPlat", upload.single('image'), platController.create);

// Retrieve all
router.get("/getAllPlats", platController.findAll);

// Retrieve a single with id
router.get("/:id", platController.findPlatById);

// Delete a with id
router.delete("/:id", platController.deletePlat);

// Update a with id
router.put("/:id", upload.single('image'), platController.updatePlat);

// Retrieve a single with name
router.get("/platNom/:nom", platController.findPlatByName);

module.exports = router;