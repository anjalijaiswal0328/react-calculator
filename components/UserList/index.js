import React from "react";

const UserList = function ({ users = [] }) {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th>Sr No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map(function (user, index) {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
