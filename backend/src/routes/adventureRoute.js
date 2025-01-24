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
import { cancelBooking, createBooking, getBooking } from "../controller/bookingController.js";
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
router.get("/booking",protect, getBooking);
router.get("/bookingbyid",protect, getAdventureById);
router.post("/booking/create",protect, createBooking)
router.delete("/booking/cancel",protect, cancelBooking)
export default router;
