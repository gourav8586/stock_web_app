let {
  adminlogin,
  register,
  view,
  update,
  del,
  update_pass,
} = require("./service");

exports.dash_frm = async (req, res) => {
  res.render("dashboard");
};
exports.login_frm = async (req, res) => {
  res.render("adminlogin");
};
exports.login_page = async (req, res) => {
  let log = await adminlogin(req, res);
  console.log(log);
  if (log.success) {
    res.render("dashboard", { data: log.data, message: [log.data.name] });
  } else {
    res.render("adminlogin", { message: "Invalid user" });
  }
};

exports.viewuser_frm = async (req, res) => {
  let reg = await view(req, res);
  res.render("viewuser", { data: reg.data });
};

exports.register_frm = async (req, res) => {
  res.render("register");
};
exports.register_page = async (req, res) => {
  let regis = await register(req, res);
  if (regis.success) {
    res.render("adminlogin");
  } else {
    res.send({
      status: 400,
      message: "not register",
      data: [],
      success: false,
    });
  }
};

exports.update_frm = async (req, res) => {
  res.render("update");
};
exports.update_page = async (req, res) => {
  let data = await update(req, res);
  if (data.success) {
    res.render("dashboard", { message: "" });
  } else {
    res.send({
      status: 400,
      message: "not updated",
      data: [],
      success: false,
    });
  }
};

exports.updatePass_frm = async (req, res) => {
  res.render("changepass", { message: "" });
};
exports.updatePass_page = async (req, res) => {
  let data = await update_pass(req, res);
  if (data.success) {
    res.render("dashboard", { message: "" });
  } else {
    res.send({
      status: 400,
      message: "Pass not Matched",
      data: [],
      success: false,
    });
  }
};

exports.delete_frm = async (req, res) => {
  let dele = await del(req, res);
  if (dele.success) {
    res.render("dashboard", { message: "" });
  } else {
    res.send({
      status: 400,
      data: [],
      success: false,
    });
  }
};
