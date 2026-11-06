import { Schema, model, Types } from "mongoose";

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: Types.ObjectId, ref: "User", required: true },
    likes: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const Post = model("Post", postSchema);
