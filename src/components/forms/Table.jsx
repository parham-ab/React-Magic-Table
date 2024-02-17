import { useSelector } from "react-redux";

const Table = () => {
  const rows = useSelector((state) => state.rows);
  const deleteHandler = (e, id) => {
    console.log(id);
  };

  return (
    <>
      <div className="overflow-x-auto mb-20">
        <table className="table border">
          {/* head */}
          <thead>
            <tr>
              <th>priority</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.priority}</td>
                <td>{row.name}</td>
                <td onClick={(e) => deleteHandler(e, row.id)}>delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
