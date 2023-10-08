import { User } from "../types";

const UsersList = ({ users }) => {
  const TABLE_HEADER = ["Picture", "Name", "Surname", "Country", "Actions"];

  const UserRow = ({ user: User }) => {
    const [picture, name, location];
    return (
      <>
        <tr>
          <img src={picture.thumbnail} alt="Thumbnail user" />
        </tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
      </>
    );
  };

  return (
    <div>
      <table>
        <tr>
          {TABLE_HEADER.map((title) => (
            <th>{title}</th>
          ))}
        </tr>
        {users.map((user: User) => {
          <UserRow user={user} />;
        })}
      </table>
    </div>
  );
};

export default UsersList;
