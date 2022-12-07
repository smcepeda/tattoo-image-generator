const express = require("express");
const { generateImage } = require("../controllers/openaiController");
const router = express.Router();

const app = express();
// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.post("/generateimage", generateImage);

module.exports = router;
