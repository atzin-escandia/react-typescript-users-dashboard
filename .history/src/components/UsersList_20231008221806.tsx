import { useState } from "react";
import { User } from "../types.d";

const UsersList = ({ allUsers }) => {
  const initialState = allUsers;
  const [users, setUsers] = useState(initialState);

  const TABLE_HEADER = ["Picture", "Name", "Surname", "Country", "Delete"];

  const UserRow = ({ user, color }) => {};

  const UserRow = ({ user, color }) => {
    const { picture, name, location } = user;

    return (
      <tr style={{ backgroundColor: color && "black" }}>
        <td>{<img src={picture.thumbnail} alt="Thumbnail user" />}</td>
        <td>{name.first}</td>
        <td>{name.last}</td>
        <td>{location.country}</td>
        <td>
          <button onClick={() => removeUser(true)}>Remove</button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {TABLE_HEADER.map((title: string, index: number) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user: User, index: number) => (
            <UserRow key={index} user={user} color={true} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
