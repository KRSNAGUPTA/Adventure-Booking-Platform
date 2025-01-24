import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
  adventure: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Adventure",
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  participants: { type: Number, required: true },
  totalPrice: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Booking", bookingSchema);
