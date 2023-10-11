import { User } from "../types.d";

interface Props {
  users: User[];
  showColors: boolean;
  removeUser: (index: number) => void;
  sortList: (users: User[], sortKey: string) => void; // Define the sortList prop
}

interface PropsUserList {
  user: User;
  color: boolean;
  index: number;
}

const UsersList = ({ users, showColors, removeUser, sortList }: Props) => {
  const TABLE_HEADER = ["Picture", "Name", "Surname", "Country", "Delete"];
  const UserRow = ({ user, color, index }: PropsUserList) => {
    const { picture, name, location } = user;
    const isEvenRow = index % 2 === 0;

    return (
      <tr style={{ backgroundColor: color && isEvenRow && "#333" }}>
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
    <table width="100%" style={{ marginTop: "80px" }}>
      <thead>
        <tr>
          {TABLE_HEADER.map((title: string, index: number) => (
            <th
              onClick={() => sortList(users, TABLE_HEADER[index])}
              key={index}
            >
              {title}
            </th>
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
