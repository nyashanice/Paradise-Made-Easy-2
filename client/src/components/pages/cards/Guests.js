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

export default Guests;
