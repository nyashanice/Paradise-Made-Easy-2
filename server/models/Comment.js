// schema only
const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    commentId: { type: ObjectId, default: new ObjectId() },

    commentBody: { type: String, required: true, maxLength: 280 },

    commentAuthor: { type: String, required: true },

    createdAt: { type: Date, default: new Date(Date.now()).toString },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = commentSchema;
