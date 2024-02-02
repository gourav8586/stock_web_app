const {
  dash_frm,
  register_frm,
  viewuser_frm,
  login_frm,
  login_page,
  register_page,
  viewuser_page,
  update_page,
  update_frm,
  delete_frm,
  updatePass_frm,
  updatePass_page,
} = require("./controller");
let express = require("express");
let router = express.Router();
router.get("/dash", dash_frm);
router.get("/", login_frm);
router.post("/loginpage", login_page);
router.get("/view", viewuser_frm);
router.get("/register", register_frm);
router.post("/registerpage", register_page);
router.get("/update", update_frm);
router.post("/updatepage", update_page);
router.get("/changepass", updatePass_frm);
router.post("/change_pass", updatePass_page);
router.post("/delete", delete_frm);
module.exports = router;
