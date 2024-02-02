let user = require("./model/user");

exports.register = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.pass;
  let mobileNo = req.body.mobile;

  let data = await user.findOne({ email });

  if (!data) {
    let rec = new user({
      name: name,
      pass: password,
      email: email,
      mobile: mobileNo,
      
    });

    let saved_data = await rec.save();

    if (saved_data) {
      return {
        message: "data saved",
        data: saved_data,
        success: true,
      };
    } else {
      return {
        message: "not saved",
        data: [],
        success: false,
      };
    }
  } else {
    console.log("User Found");
    return {
      success: false,
      message: "User already found",
    };
  }
};

exports.adminlogin = async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.pass;

  let data = await user.findOne({ email: email });

  if (data) {
    if (data.pass == password) {
      console.log("User Logged in");
      return {
        message: "",
        email: data.email,
        data: data,
        success: true,
        status: 200,
      };
    } else {
      console.log("Wrong Pass");
      return {
        success: false,
        status: 300,
      };
    }
  }
};

exports.view = async (req, rep) => {
  let name = req.body.name;

  let data = await user.find();
  console.log("User ", data);
  return {
    data: data,
    message: "All Users",
  };
};

exports.update = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.pass;
  const mobile = req.body.mobile;

  const recc = await user.findOne({ name: name, password: password });
  // console.log(user);

  const updatedEmail = email || recc.email;
  const updatedMobile = mobile || recc.mobile;

  let updateData = await user.findOneAndUpdate(
    { name: name, password: password },
    {
      email: updatedEmail,
      mobile: updatedMobile,
    }
  );
  if (updateData) {
    console.log(updateData);
    return {
      message: "Data updated",
      data: updateData,
      success: true,
      status: 200,
    };
  } else {
    return {
      message: " data not updated",
      data: [],
      success: false,
      status: 300,
    };
  }
};

exports.update_pass = async (req, res) => {
  let oldPass = req.body.oldpass;
  let newPass = req.body.pass;
  let confpass = req.body.conpass;

  if (newPass == confpass) {
    let data = await user.findOne({ password: oldPass });
    console.log("data-f---" + data + "pass" + oldPass);
    if (data) {
      let data1 = await user.updateOne(
        { pass: oldPass },
        { $set: { pass: newPass } }
      );
      // console.log(data1);
      if (data1) {
        return {
          message: "",
          data: data1,
          success: true,
          status: 200,
        };
      } else {
        return {
          message: "Pass not matched",
          data: [],
          success: false,
          status: 300,
        };
      }
    } else {
      return {
        message: "Pass uhh matched",
        data: [],
        success: false,
        status: 300,
      };
    }
  }
};

exports.del = async (req, res) => {
  let email = req.body.email;
  console.log(email);

  if (email) {
    let data = await user.deleteOne({ email: email });
    console.log("data deleted");

    return {
      data: data,
      success: true,
      status: 200,
    };
  } else {
    return {
      data: [],
      success: false,
      status: 400,
    };
  }
};
