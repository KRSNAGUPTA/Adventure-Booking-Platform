import Adventure from "../model/adventureModel.js";
import moment from "moment";
export const getAdventure = async (req, res) => {
  try {
    const adventure = await Adventure.find({});
    return res.status(200).json({
      message: "fetched all adventures",
      adventure,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
};
export const getAdventureById = async (req, res) => {
  const { adventureId } = req.params;
  if (!adventureId) {
    return res.status(400).json({ message: "adventure id is required" });
  }
  try {
    const adventure = await Adventure.findById(adventureId);
    return res.status(200).json({
      message: "fetched adventure by id",
      adventure,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
};

export const createAdventure = async (req, res) => {
  const { title, description, price, location, date, maxParticipants, image } =
    req.body;

  if (
    !title ||
    !description ||
    !price ||
    !location ||
    !date ||
    !maxParticipants
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const parsedDate = moment(date, "DD/MM/YYYY", true);
    const adventure = new Adventure({
      title,
      description,
      price,
      location,
      date: parsedDate,
      maxParticipants,
      image,
    });

    const createdAdventure = await adventure.save();
    return res.status(201).json(createdAdventure);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAdventure = async (req, res) => {
  const { adventureId } = req.params;
  const { title, description, price, location, date, maxParticipants, image } = req.body;
  if (!adventureId) {
    return res.status(400).json({ message: "adventure id is required" });
  }
  try {
    const adventure = await Adventure.findById(adventureId);

    if (!adventure) {
      return res.status(404).json({ message: "Adventure not found" });
    }
    if(title) adventure.title = title;
    if(description) adventure.description = description;
    if(price) adventure.price = price;
    if(location) adventure.location = location;
    if(date) adventure.date = new moment(date, "DD/MM/YYYY", true);
    if(maxParticipants) adventure.maxParticipants = maxParticipants;
    if(image) adventure.image = image;
    await adventure.save();
    return res.status(200).json(adventure);
  } catch (error) {
    res.status(500).json({ message: "Failed to update adventure" });
    console.error(error);
  }
};

export const deleteAdventure = async (req, res) => {
  const { adventureId } = req.params;
  try {
    const adventure = await Adventure.findById(adventureId);

    if (!adventure) {
      return res.status(404).json({ message: "Adventure not found" });
    }

    await Adventure.deleteOne({ _id: adventureId });
    res.status(200).json({ message: "Adventure deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete adventure" });
    console.error(error);
  }
};
