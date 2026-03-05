import mongoose, { Document } from "mongoose";

export interface IRequest extends Document {
  username: string;
  email: string;
  targetSubDomain: string;
  createdAt: string;
  updatedAt: string;
}

const requestSchema = new mongoose.Schema<IRequest>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
    targetSubDomain: {
      type: String,
      required: [true, "Target subdomain is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", requestSchema);

export default Request;
