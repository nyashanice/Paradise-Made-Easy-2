import React from "react";

// const PostList = ({
//   posts,
//   title,
//   showTitle = true,
//   showName = true,
// }) => {
//   if (!posts.length) {
//     return <h3>Create your first post to see it here!</h3>;
//   }

//   return (
//     <div>
//       {showTitle && <h3>{title}</h3>}
//       {posts &&
//         posts.map((post) => (
//           <div key={post._id} className="card mb-3">
//             <h4 className="card-header bg-primary text-light p-2 m-0">
//               {showName ? (
//                 <Link
//                   className="text-light"
//                   to={`/profiles/${post.postAuthor}`}
//                 >
//                   {post.postAuthor} <br />
//                   <span style={{ fontSize: "1rem" }}>
//                     posted this on {post.createdAt}
//                   </span>
//                 </Link>
//               ) : (
//                 <>
//                   <span style={{ fontSize: "1rem" }}>
//                     You posted this on {post.createdAt}
//                   </span>
//                 </>
//               )}
//             </h4>
//             <div className="card-body bg-light p-2">
//               <p>{post.postText}</p>
//             </div>
//             <Link
//               className="btn btn-primary btn-block btn-squared"
//               to={`/thoughts/${post._id}`}
//             >
//               Leave a comment on this post.
//             </Link>
//           </div>
//         ))}
//     </div>
//   );
// };

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
