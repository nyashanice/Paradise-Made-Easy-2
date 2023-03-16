import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

const PostForm = () => {
  const [newPost, setNewPost] = useState({
    postText: "",
    postAuthor: "",
  });

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  });
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: { ...newPost },
      });
      setNewPost({
        postText: "",
        postAuthor: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "postText" && value.length <= 300) {
      setNewPost(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className="text-center">
      <h4 className="p-2">↓ Leave a post about your trip! ↓</h4>

      <p
        className={`m-0 ${
          characterCount === 300 || error ? "text-danger" : ""
        }`}
      >
        Character Count: {characterCount}/300
        {error && <span className="ml-2">{error.message}</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12 col-lg-9">
          <textarea
            name="postText"
            placeholder="Leave a post here"
            value={newPost.postText}
            className="w-96 h-96 px-0 text-sm text-gray-900 bg-blue-300 border-2 border-black "
            // style={{ lineHeight: "1.5", resize: "vertical" }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="postAuthor"
            placeholder="What's your name?"
            value={newPost.postAuthor}
            className="form-input w-96 border-4 border-black"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-3">
          <button
            className="btn btn-primary btn-block py-3 bg-black w-96 text-white hover:text-gray-500"
            type="submit"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
