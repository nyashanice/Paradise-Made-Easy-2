import React from "react";
import { useQuery } from "@apollo/client";
import PostForm from "../postForm";
import PostList from "../postList";
import { QUERY_POSTS } from "../../utils/queries";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="text-center main-text text-3xl p-4">
          Welcome to the dashboard!
        </h2>
        <div>
          <PostForm />
        </div>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Guest posts" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
