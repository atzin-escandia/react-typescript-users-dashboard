const UsersList = () => {
  const TABLE_HEADER = ["Picture", "Name", "Surname", "Country", "Actions"];

  return (
    <div>
      <table>
        <tr>
          {TABLE_HEADER.map((title) => (
            <th>{title}</th>
          ))}
        </tr>
        <tr>
          <td>ño</td>
          <td>lii</td>
          <td>ñuuuo</td>
          <td>ñuuuo</td>
        </tr>
        <tr>
          <td>ño</td>
        </tr>
        <tr>
          <td>ño</td>
        </tr>
      </table>
    </div>
  );
};

export default UsersList;
