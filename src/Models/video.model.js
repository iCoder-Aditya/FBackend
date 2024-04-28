import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // cloudnary url
      required: true,
    },
    thumbnail: {
      type: String, // cloudnary url
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, // cloud
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      defalut: true,
    },
  },
  { timestaps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("video", videoSchema);
