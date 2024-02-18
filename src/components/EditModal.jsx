import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editRows } from "features/tableSlice";
import edit from "assets/pencilSquare.svg";

const EditModal = ({ currentRow }) => {
  const dispatch = useDispatch();
  const [editedValue, setEditedValue] = useState({
    priority: "",
    name: "",
  });
  useEffect(() => {
    if (currentRow && currentRow.length > 0) {
      const { priority, name } = currentRow[0];
      setEditedValue({ priority, name });
    }
  }, [currentRow]);
  const changeHandler = (e) => {
    setEditedValue({ ...editedValue, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (currentRow) {
      const { id } = currentRow[0];
      dispatch(editRows({ id, ...editedValue }));
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
                  name={"name"}
                  placeholder="Name"
                  onChange={changeHandler}
                />
              </div>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-red-500 hover:text-white">
                ✕
              </button>
              <button className="" onClick={submitHandler}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditModal;
