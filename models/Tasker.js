import mongoose from "mongoose";

const TaskerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },

    category: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],

    img: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Tasker || mongoose.model("Tasker", TaskerSchema);
