import mongoose
 from "mongoose";
const adventureSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
    maxParticipants: { type: Number, required: true },
});

export default mongoose.model("Adventure", adventureSchema);
