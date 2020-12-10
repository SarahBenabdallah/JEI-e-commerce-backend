const express = require("express");
const router = express.Router();
module.exports = router;
const orderCntrl = require("../controllers/orderController");
/*this file contains all the application-users- routes*/
router.post("/post", orderCntrl.post);
router.get("/get", orderCntrl.get);
