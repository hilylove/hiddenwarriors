import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  kinds: {
    type: [String],
    required: true,
  },
});

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);
