import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRows } from "features/tableSlice";
import EditModal from "../EditModal";
import edit from "assets/pencil.svg";
import trash from "assets/trash.svg";

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
    let selectedRow = rows.filter((item) => item?.id === id);
    setCurrentRow(selectedRow);
  };
  return (
    <>
      {/* {console.log(rows.sort((a, b) => b.priority - a.priority))} */}
      <div className="overflow-x-auto my-40">
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
            {rows?.map((row) => (
              <tr key={row?.id}>
                <td>{row?.priority}</td>
                <td>{row?.name}</td>
                <td>
                  <span className="btn btn-sm btn-circle btn-ghost">
                    <img
                      onClick={() => editHandler(row?.id)}
                      src={edit}
                      alt="edit"
                    />
                  </span>

                  <span className="btn btn-sm btn-circle btn-ghost">
                    <img
                      onClick={() => deleteHandler(row?.id)}
                      src={trash}
                      alt="trash"
                    />
                  </span>
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
