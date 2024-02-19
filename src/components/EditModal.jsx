import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editRows } from "features/tableSlice";
import edit from "assets/pencilSquare.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import editSchema from "utils/validations/form";
const EditModal = ({ currentRow }) => {
  const {
    register,
    getValues,
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
  const submitHandler = (e) => {
    e.preventDefault();
    if (currentRow) {
      const { id } = currentRow[0];
      let priority = getValues("priority");
      let name = getValues("name");
      dispatch(editRows({ id, priority, name }));
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
                <label className="input input-bordered input-sm flex items-center gap-2 my-3">
                  <input
                    placeholder="Priority"
                    className="grow"
                    {...register("priority")}
                  />
                </label>
                <label className="input input-bordered input-sm flex items-center gap-2 my-3">
                  <input
                    type="text"
                    {...register("name")}
                    className="grow"
                    placeholder="Name"
                  />
                </label>
              </div>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-red-500 hover:text-white">
                ✕
              </button>
              <button
                disabled={!isDirty || !isValid || isSubmitting}
                className="btn"
                onClick={submitHandler}
              >
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
