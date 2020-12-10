const express = require("express");
const router = express.Router();
module.exports = router;
const productCntrl = require("../controllers/productController");
/*this file contains all the application-users- routes*/
router.post("/post", productCntrl.post);
router.post("/post/:id", productCntrl.postOne);
router.get("/get", productCntrl.get);
router.get("/get/:id", productCntrl.getOne);
