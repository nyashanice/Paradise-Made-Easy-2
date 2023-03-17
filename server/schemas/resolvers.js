const { User, Post } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("posts");
    },
    user: async (parent, { name }) => {
      return User.findOne({ name }).populate("posts");
    },
    posts: async (parent, { name }) => {
      const params = name ? { name } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      return User.create({ name, email, password });
    },
    addPost: async (parent, { postText, postAuthor }) => {
      // return User.findOneAndUpdate(
      //   { _id: userId },
      //   { $addToSet: { posts: postText, postAuthor } },
      //   {
      //     new: true,
      //     runValidators: true,
      //   }
      // );
      return Post.create({ postText, postAuthor });
    },
    addComment: async (parent, { postId, commentBody, commentAuthor }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: {
            comments: { commentBody, commentAuthor },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removePost: async (parent, { userId, postId }) => {
      return User.findOneAndDelete(
        { _id: userId },
        { $pull: { posts: post } },
        { new: true }
      );
    },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
  },
};

module.exports = resolvers;
