import React from "react";

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3 className="main-text text-center text-3xl p-4">{title}</h3>
      <div className="grid grid-cols-2 justify-items-center">
        {posts &&
          posts.map((post) => (
            <div
              key={post._id}
              className="max-w-sm rounded overflow-hidden shadow-lg p-4"
            >
              <h4 className="main-text text-2xl">
                {post.postAuthor} <br />
                <span className="font-sans text-sm">
                  posted this on {post.createdAt}
                </span>
              </h4>
              <div className="p-0">
                <p>{post.postText}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;
