const { Schema, model } = require("mongoose");
const commentSchema = require("./Comment");

const postSchema = new Schema({
  postText: {
    type: String,
    required: "You need to leave a post!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: new Date(Date.now()).toString,
  },
  comments: [commentSchema],
});

const Post = model("Post", postSchema);

module.exports = Post;
