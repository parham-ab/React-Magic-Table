import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editRows } from "features/tableSlice";
import edit from "assets/pencilSquare.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import editSchema from "utils/validations/form";
import toast from "react-hot-toast";
const EditModal = ({ currentRow }) => {
  const rows = useSelector((state) => state.rows);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitting },
    setValue,
  } = useForm({
    resolver: yupResolver(editSchema),
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentRow && currentRow.length > 0) {
      const { priority, name } = currentRow[0];
      setValue("priority", priority);
      setValue("name", name);
    }
  }, [currentRow]);
  const submitHandler = () => {
    if (currentRow) {
      const { id } = currentRow[0];
      let priority = +getValues("priority");
      let name = getValues("name");
      const currentPriority = currentRow[0].priority;
      const isPriorityChanged = priority !== currentPriority;
      if (isPriorityChanged) {
        const isDuplicatePriority = rows.some(
          (row) => row.priority === priority
        );
        if (isDuplicatePriority) {
          toast.error(
            "Duplicate priority! Please choose a different priority."
          );
          return;
        }
      }
      dispatch(editRows({ id, priority, name }));
      document.getElementById("my_modal_1").close();
    }
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <div className="flex gap-2 items-center">
          <h3 className="font-bold text-lg">Edit</h3>
          <img src={edit} alt="edit" />
        </div>
        <p>Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog" className="m-auto">
            <div className="flex flex-col m-auto">
              <label className="input input-bordered input-sm flex items-center gap-2 my-3">
                <input
                  placeholder="Priority"
                  type="number"
                  className="grow"
                  {...register("priority")}
                />
              </label>
              <label className="input input-bordered input-sm flex items-center gap-2 my-3">
                <input
                  type="text"
                  className="grow"
                  placeholder="Name"
                  {...register("name")}
                />
              </label>
            </div>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-red-500 hover:text-white">
              ✕
            </button>
            <button
              disabled={!isDirty || !isValid || isSubmitting}
              className="btn btn-wide btn-sm btn-primary"
              onClick={handleSubmit(submitHandler)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default EditModal;
