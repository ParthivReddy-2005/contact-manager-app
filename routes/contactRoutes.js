const express = require("express");
const router = express.Router();

const {getContacts,getContactId,createContact,updateContact,deleteContact} = require("../controllers/contactControllers");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContactId).put(updateContact).delete(deleteContact);

module.exports = router;
