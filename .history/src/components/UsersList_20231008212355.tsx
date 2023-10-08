import { User } from "../types";

const UsersList = ({ users }) => {
  const TABLE_HEADER = ["Picture", "Name", "Surname", "Country", "Actions"];

  const UserRow = ({ user: User }) => {
    const [picture, name, location] = user;
    return (
      <tr>
        <td>
          <img src={picture.thumbnail} alt="Thumbnail user" />
        </td>
        <td>{name.first}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  };

  return (
    <div>
      <table>
        <tr>
          {TABLE_HEADER.map((title: string, index: number) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
        {users &&
          users.map((user: User, index: number) => {
            <UserRow key={index} user={user} />;
          })}
      </table>
    </div>
  );
};

export default UsersList;
