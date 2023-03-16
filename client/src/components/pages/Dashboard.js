import React from "react";
import { useQuery } from "@apollo/client";
import { Navigate, useParams, Link } from "react-router-dom";
import PostForm from "../postForm";
import PostList from "../postList";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";

export default function Dashboard() {
  const { name: userParam } = useParams();

  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { name: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getUser().data.name === userParam) {
    return <Navigate to="dashboard" />;
  }

  if (!user?.name) {
    return (
      <p>
        Please
        <Link className="text-blue-700" to="/login">
          {" "}
          login{" "}
        </Link>
        to see this content.
      </p>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2>Welcome {userParam ? `${user.name}!` : "to your dashboard!"}</h2>
        <div>
          <PostList
            posts={user.posts}
            title={`${user.name}'s posts`}
            showTitle={false}
            showName={false}
          />
        </div>
        <div>
          {!userParam && (
            <div>
              <PostForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
