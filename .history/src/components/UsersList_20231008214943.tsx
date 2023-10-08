import { User } from "../types";
import { User } from "../../.history/src/types.d_20231008211638";

const UsersList = ({ users }) => {
  const TABLE_HEADER = ["Picture", "Name", "Surname", "Country", "Actions"];

  const UserRow = ({ user: User }) => {
    const { picture, name, location } = User;

    console.log(picture);

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
          {users.map((user: User, index: number) => (
            <UserRow key={index} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
