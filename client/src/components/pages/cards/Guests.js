import React from "react";
import { QUERY_USERS } from "../../../utils/queries";
import { useQuery } from "@apollo/client";
import GuestList from "../GuestList";

const Guests = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <GuestList
            users={users}
          />
        )}
      </div>
    </div>
  );
};

// function Guests(props) {
//   return (
//     <ul className="list-group">
//       {props.users.map((user) => (
//         <li className="list-group-item" key={result.id}>
//           <card>
//             <h3>Name={user.name}</h3>
//             <p>Email={user.email}</p>
//           </card>
//         </li>
//       ))}
//     </ul>
//   );
// }

export default Guests;
