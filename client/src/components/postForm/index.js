import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_POST } from "../../utils/mutations";

const PostForm = () => {
  const [createPost, setCreatePost] = useState({
    postText: "",
    postAuthor: "",
  });

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          ...createPost,
        },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "postText" && value.length <= 300) {
      setCreatePost({ ...createPost, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== "postText") {
      setCreatePost({ ...createPost, [name]: value });
    }
  };

  return (
    <div className="text-center">
      <h4 className="p-2">↓ Leave a post about your trip! ↓</h4>

      <p
        className={`m-0 ${
          characterCount === 300 || error ? "text-red-500" : ""
        }`}
      >
        Character Count: {characterCount}/300
        {error && <span className="ml-2">{error.message}</span>}
      </p>
      <form onSubmit={handleFormSubmit}>
        <div>
          <textarea
            name="postText"
            placeholder="Leave a post here"
            value={createPost.postText}
            className="w-96 h-96 px-0 text-sm text-gray-900 bg-blue-300 border-2 border-black "
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <input
            name="postAuthor"
            placeholder="What's your name?"
            value={createPost.postAuthor}
            className="form-input w-96 border-4 border-black"
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            className="btn btn-block py-3 bg-black w-96 text-white hover:text-gray-500"
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
