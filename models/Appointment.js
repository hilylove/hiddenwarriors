import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    tasker: { type: String, ref: "Tasker" },
  },
  { timestamps: true }
);
export default mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);
