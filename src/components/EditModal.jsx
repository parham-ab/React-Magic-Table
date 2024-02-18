import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editRows } from "features/tableSlice";

const EditModal = ({ currentRow }) => {
  const rows = useSelector((state) => state.rows);
  const dispatch = useDispatch();
  const [editedValue, setEditedValue] = useState({
    priority: "",
    name: "",
  });
  const changeHandler = (e) => {
    setEditedValue({ ...editedValue, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (currentRow) {
      const { id, priority, name } = currentRow[0];
      const currentTodo = rows.filter((item) => item.id === id);
      dispatch(
        editRows({ id, priority: editedValue.priority, name: editedValue.name })
      );
    }
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form  method="dialog">
              <input
                value={editedValue.priority}
                name={"priority"}
                onChange={changeHandler}
              />
              <input
                value={editedValue.name}
                name={"name"}
                onChange={changeHandler}
              />
              <button className="btn">Close</button>
              <span className="" onClick={submitHandler}>
                submit
              </span>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditModal;
