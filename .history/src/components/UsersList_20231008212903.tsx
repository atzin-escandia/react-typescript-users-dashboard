import { User } from "../types";

const UsersList = ({ users }) => {
  const TABLE_HEADER = ["Picture", "Name", "Surname", "Country", "Actions"];

  const UserRow = ({ user: User }) => {
    const [picture, name, location] = user;
    return (
      <tr>
        <tbody>
          {/* <img src={picture.thumbnail} alt="Thumbnail user" /> */}
        </tbody>
        <tbody>{name.first}</tbody>
        <tbody></tbody>
        <tbody></tbody>
        <tbody></tbody>
      </tr>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {TABLE_HEADER.map((title: string, index: number) => (
              <tH key={index}>{title}</tH>
            ))}
          </tr>
        </thead>
        {users &&
          users.map((user: User, index: number) => {
            <UserRow key={index} user={user} />;
          })}
      </table>
    </div>
  );
};

export default UsersList;
