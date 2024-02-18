import { useDispatch, useSelector } from "react-redux";
import { deleteRows, editRows } from "features/tableSlice";
import EditModal from "../EditModal";
import { useState } from "react";

const Table = () => {
  const [currentRow, setCurrentRow] = useState(null);
  const rows = useSelector((state) => state.rows);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteRows(id));
  };
  const editHandler = (id) => {
    // dispatch(editRows({ id }));
    document.getElementById("my_modal_1").showModal();
    let selectedRow = rows.filter((item) => item.id === id);
    setCurrentRow(selectedRow);
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
                <td>
                  <span onClick={() => editHandler(row.id)}>edit</span>
                  {/* <span onClick={() => editHandler(row.id)}>edit</span> */}
                  <span onClick={() => deleteHandler(row.id)}>delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <EditModal currentRow={currentRow} />
      </div>
    </>
  );
};

export default Table;
