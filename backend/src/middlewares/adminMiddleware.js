import User from "../model/userModel.js";

const adminMiddleware = async (req, res, next) => {
  const id = req.user.id;
  const user = await User.findById(id);
  if (user.isAdmin == true) {
    next();
    return;
  }
  console.log(`User ${user.isAdmin} is not an admin`);
  return res
    .status(403)
    .json({ message: "You are not authorized to access this route" });
};

export default adminMiddleware;