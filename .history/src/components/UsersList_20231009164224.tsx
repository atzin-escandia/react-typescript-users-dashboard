import { useState } from "react";
import { User } from "../types.d";

interface Props {
  allUsers: User[];
  showColors: boolean;
}

const UsersList = ({ allUsers, showColors }: Props) => {
  const TABLE_HEADER = ["Picture", "Name", "Surname", "Country", "Delete"];

  const initialState = allUsers;
  const [users, setUsers] = useState(initialState);

  const removeUser = ({ index }) => {
    const newUsers = [...allUsers];
    const newList = newUsers.splice(index, 1);
    setUsers(newList);
  };

  const UserRow = ({ user, color, index }) => {
    const { picture, name, location } = user;

    return (
      <tr style={{ backgroundColor: color && "black" }}>
        <td>{<img src={picture.thumbnail} alt="Thumbnail user" />}</td>
        <td>{name.first}</td>
        <td>{name.last}</td>
        <td>{location.country}</td>
        <td>
          <button onClick={() => removeUser(index)}>Remove</button>
        </td>
      </tr>
    );
  };

  return (
    <table width="100%">
      <thead>
        <tr>
          {TABLE_HEADER.map((title: string, index: number) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {allUsers.map((user: User, index: number) => (
          <UserRow key={index} user={user} color={true} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;
