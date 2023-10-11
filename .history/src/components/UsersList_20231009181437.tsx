import { User } from "../types.d";

interface Props {
  users: User[];
  showColors: boolean;
}

const UsersList = ({ users, showColors }: Props) => {
  const TABLE_HEADER = ["Picture", "Name", "Surname", "Country", "Delete"];

  const removeUser = ({ index }) => {
    const newUsers = [...users];
    const newList = newUsers.splice(index, 1);
    setUsers(newList);
  };

  const UserRow = ({ user, color, index }) => {
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
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user: User, index: number) => (
          <UserRow key={index} user={user} color={showColors} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;