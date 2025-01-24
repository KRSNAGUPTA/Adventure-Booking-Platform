import { Router } from "express";
import { getUserProfile, loginUser, registerUser } from "../controller/userController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = Router();
router.get("/", (req, res) => {
  res.send("API for user is running....");
});
router.post("/login",loginUser);
router.post("/register",registerUser);
router.post("/profile",protect,getUserProfile);
export default router;