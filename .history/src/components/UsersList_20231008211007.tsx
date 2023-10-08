const UsersList = ({ users }) => {
  const TABLE_HEADER = ["Picture", "Name", "Surname", "Country", "Actions"];

  const UserRow = (user) => {
    return (
      <>
        <tr></tr>
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
        {users.map((user) => {
          <UserRow user={user} />;
        })}
      </table>
    </div>
  );
};

export default UsersList;
