import { User } from "../types";

const UsersList = (users) => {
  const TABLE_HEADER = ["Picture", "Name", "Surname", "Country", "Actions"];
  console.log(users);

  const UserRow = ({ user: User }) => {
    const [picture, name, location] = user;
    return (
      <>
        <tr>
          <img src={picture.thumbnail} alt="Thumbnail user" />
        </tr>
        <tr>{name.first}</tr>
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
        {users &&
          users.map((user: User, index: number) => {
            <UserRow key={index} user={user} />;
          })}
      </table>
    </div>
  );
};

export default UsersList;
