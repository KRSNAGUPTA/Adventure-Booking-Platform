import Booking from "../model/bookingModel.js";
import Adventure from "../model/adventureModel.js";
export const getBooking = async (req, res) => {
  const userId = req.user.id;
  if (!userId) {
    return res.status(400).json({
      message: "User not found",
    });
  }
  try {
    const booking = await Booking.find({ user: userId })
      .populate("user", "name email")
      .populate("adventure", "title location");
    res.status(200).json({
      message: "Fetched all bookings",
      booking,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const bookingById = async (req, res) => {
  const bookingId = req.params.bookingId;
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }
    res.status(200).json({
      message: "Booking fetched",
      booking,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const createBooking = async (req, res) => {
  const { adventureId, participants } = req.body;

  if (!adventureId || !participants) {
    return res
      .status(400)
      .json({ message: "Adventure ID and participants are required" });
  }

  try {
    const adventure = await Adventure.findById(adventureId);
    if (!adventure) {
      return res.status(404).json({ message: "Adventure not found" });
    }

    const totalPrice = participants * adventure.price;

    if (participants > adventure.maxParticipants) {
      return res.status(400).json({ message: "Not enough slots available" });
    }

    const booking = new Booking({
      user: req.user.id,
      adventure: adventureId,
      participants,
      totalPrice,
      date: new Date(),
    });

    const newBooking = await booking.save();

    adventure.maxParticipants -= participants;
    await adventure.save();

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const cancelBooking = async (req, res) => {
    const userId = req.user.id;
  
    if (!userId) {
      return res.status(400).json({
        message: "User ID not provided",
      });
    }
  
    const { bookingId } = req.body;
  
    if (!bookingId) {
      return res.status(400).json({
        message: "Booking ID not provided",
      });
    }
  
    try {
      const booking = await Booking.findById(bookingId);
  
      if (!booking) {
        return res.status(404).json({
          message: "No booking found",
        });
      }
  
      if (booking.user.toString() !== userId) {
        return res.status(403).json({
          message: "You are not allowed to cancel this booking",
        });
      }
  
      const adventure = await Adventure.findById(booking.adventure);
  
      if (!adventure) {
        return res.status(404).json({
          message: "No associated adventure found",
        });
      }
  
      adventure.maxParticipants += booking.participants;
      await adventure.save();
  
      await booking.deleteOne();
  
      return res.status(200).json({
        message: "Booking cancelled successfully",
      });
    } catch (error) {
      console.error("Error cancelling booking:", error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };
  