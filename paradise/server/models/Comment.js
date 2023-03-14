// schema only
const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    commentId: { type: ObjectId, default: new ObjectId() },

    commentBody: { type: String, required: true, maxLength: 280 },

    commentAuthor: { type: String, required: true },

    createdAt: { type: Date, default: Date.now, get: reformat },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// reformats time
// function reformat(createdAt) {
//   const hours = createdAt.getUTCHours();
//   const minutes = createdAt.getUTCMinutes();
//   const time = hours + ":" + minutes;
//   return time;
// }

module.exports = commentSchema;
