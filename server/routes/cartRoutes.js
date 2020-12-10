const express = require("express");
const router = express.Router();
module.exports = router;
const cartCntrl = require("../controllers/cartController");
/*this file contains all the application-users- routes*/
router.post("/post", cartCntrl.post);
router.get("/get/:id", cartCntrl.getOne);
