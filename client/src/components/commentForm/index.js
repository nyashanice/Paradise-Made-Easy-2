import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";

import { ADD_COMMENT } from "../../utils/mutations";

// import Auth from "../../utils/auth";

const CommentForm = ({ postId }) => {
  const [commentBody, setCommentBody] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          postId,
          commentBody,
          // commentAuthor: Auth.getUser().data.name,
        },
      });

      setCommentBody("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentBody" && value.length <= 300) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>What's on your mind?</h4>
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
                name="commentBody"
                placeholder="Add your comment..."
                value={commentBody}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Comment
              </button>
            </div>
          </form>
    </div>
  );
};

export default CommentForm;
