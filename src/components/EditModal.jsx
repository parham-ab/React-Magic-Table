import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editRows } from "features/tableSlice";
import edit from "assets/pencilSquare.svg";

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
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="flex gap-2 items-center">
            <h3 className="font-bold text-lg">Edit</h3>
            <img src={edit} alt="edit" />
          </div>

          <p className="py-4">
            Press ESC key or click the button below to close
          </p>

          <div className="modal-action">
            <form method="dialog">
              <div className="flex flex-col m-auto">
                <input
                  value={editedValue.priority}
                  name={"priority"}
                  placeholder="Priority"
                  onChange={changeHandler}
                />
                <input
                  value={editedValue.name}
                  placeholder="Name"
                  name={"name"}
                  onChange={changeHandler}
                />
              </div>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-red-500 hover:text-white">
                ✕
              </button>
              <button className="" onClick={submitHandler}>
                submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditModal;
