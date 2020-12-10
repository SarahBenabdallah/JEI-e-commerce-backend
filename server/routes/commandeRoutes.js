const express = require("express");
const router = express.Router();
module.exports = router;
const commandeCntrl = require("../controllers/commandeController");
/*this file contains all the application-users- routes*/
router.post("/post", commandeCntrl.post);
router.get("/get", commandeCntrl.get);
