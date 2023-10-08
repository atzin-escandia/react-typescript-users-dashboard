import { User } from "../types.d";

const UsersList = ({ users }) => {
  const TABLE_HEADER = ["Picture", "Name", "Surname", "Country", "Delete"];

  const UserRow = ({ user }) => {
    const { picture, name, location } = user;

    console.log(picture);

    return (
      <tr>
        <td>{<img src={picture.thumbnail} alt="Thumbnail user" />}</td>
        <td>{name.first}</td>
        <td>{name.last}</td>
        <td>{location.country}</td>
        <td>
          <button>Remove</button>{" "}
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
          {users.map((user: User, index: number) => (
            <UserRow key={index} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
