const User = require("../Model/UserModel");

const getAllUsers = async (req, res, next) => {
  let Users;

  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }

  //Not found
  if (!Users) {
    return res.status(404).json({ message: "useer not found" });
  }
};

exports.getAllUsers = getAllUsers;
