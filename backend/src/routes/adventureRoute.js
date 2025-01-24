import { Router } from "express";
import {
  createAdventure,
  deleteAdventure,
  getAdventure,
  getAdventureById,
  updateAdventure,
} from "../controller/adventureController.js";
import { protect } from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";
const router = Router();
router.get("/", (req, res) => {
  res.send("API is running....");
});
router.get("/getall", getAdventure);
router.get("/getbyid/:adventureId", getAdventureById);
router.post("/create", protect, adminMiddleware, createAdventure);
router.patch("/update/:adventureId", protect, adminMiddleware, updateAdventure);
router.delete(
  "/delete/:adventureId",
  protect,
  adminMiddleware,
  deleteAdventure
);
export default router;
