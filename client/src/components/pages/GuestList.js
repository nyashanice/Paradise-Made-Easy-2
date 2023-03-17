import React from "react";


const GuestList = ({ users }) => {
  if (!users.length) {
    return <h2>No guests for this trip</h2>;
  }
  return (
    <div>
      <h3 className="text-center main-text text-3xl">Guests</h3>
      <div className="grid grid-cols-2">
        {users &&
          users.map((user) => (
            <div
              key={user._id}
              className="max-w-sm rounded overflow-hidden shadow-lg p-4"
            >
              <div>
                <h4 className="font-bold text-xl mb-2">{user.name}</h4>
                <p>Email: {user.email}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GuestList;
