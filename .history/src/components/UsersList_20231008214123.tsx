import { useState } from "react";
import { User } from "../types";

const UsersList = ({ allUsers }) => {
  const [users, setUsers] = useState(allUsers);

  const TABLE_HEADER = ["Picture", "Name", "Surname", "Country", "Actions"];

  const UserRow = ({ user: { picture, name, location } }) => {
    console.log(user);

    return (
      <tr>
        <td>{<img src={picture.thumbnail} alt="Thumbnail user" />}</td>
        <td>{name.first}</td>
        <td>{name.last}</td>
        <td>{location.country}</td>
        <td></td>
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
          {users &&
            users.map((user: User, index: number) => {
              return <UserRow key={index} user={user} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
