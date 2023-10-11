import { useState } from "react";
import { User } from "../types.d";

interface Props {
  users: User[];
  showColors: boolean;
  removeUser: (index: number) => void;
}

interface PropsUserList {
  user: User;
  color: boolean;
  index: number;
}

const UsersList = ({ users, showColors, removeUser }: Props) => {
  const TABLE_HEADER = ["Picture", "Name", "Surname", "Country", "Delete"];
  const [sortByHeader, setSortByHeader] = useState(null);
  const UserRow = ({ user, color, index }: PropsUserList) => {
    const { picture, name, location } = user;
    const isEvenRow = index % 2 === 0;

    return (
      <tr style={{ backgroundColor: color && isEvenRow && "black" }}>
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
            <>
              <th key={index}>
                {title}{" "}
                <button onClick={sortByHeader()}>
                  {" "}
                  {sortByHeader ? "<" : ">"}
                </button>
              </th>
            </>
          ))}
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user: User, index: number) => (
            <UserRow
              key={user.login.uuid}
              user={user}
              color={showColors}
              index={index}
            />
          ))}
      </tbody>
    </table>
  );
};

export default UsersList;
