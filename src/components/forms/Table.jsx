import { useSelector } from "react-redux";

const Table = () => {
  const state = useSelector((state) => state.rows);
  const deleteHandler = (e, id) => {
    console.log(id);
  };
  
  return (
    <>
      <div className="overflow-x-auto">
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
            {/* row 1 */}
            {state.map((item) => (
              <tr key={item.id}>
                <td>{item.priority}</td>
                <td>{item.name}</td>
                <td onClick={(e) => deleteHandler(e, item.id)}>delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
