import React from "react";

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function Guests(props) {
  return (
    <ul className="list-group">
      {props.users.map((user) => (
        <li className="list-group-item" key={result.id}>
          <card>
            <h3>Name={user.name}</h3>
            <p>Email={user.email}</p>
          </card>
        </li>
      ))}
    </ul>
  );
}

export default Guests;
