import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import Table from "./Table";
import { addRows } from "features/tableSlice";
import formSchema from "utils/validations/form";
import { useEffect } from "react";
import sparks from "assets/sparks.svg";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid, isSubmitting, errors, isSubmitSuccessful },
    setValue,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);
  const dispatch = useDispatch();

  const submitHandler = (data) => {
    dispatch(addRows(data.priority, data.name));
    setValue("priority", "");
    setValue("name", "");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-blue-200 w-72 p-5 rounded-xl shadow-xl m-auto relative"
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900 flex justify-center items-center">
          <img src={sparks} alt="magic" />
        </div>
        <label className="input input-bordered input-sm flex items-center gap-2 my-3">
          <input
            type="number"
            {...register("priority")}
            className="grow"
            placeholder="Priority"
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

        <button
          disabled={!isDirty || !isValid || isSubmitting}
          type="submit"
          className="btn btn-sm btn-wide btn-info"
        >
          Add
        </button>
      </form>
      <Table />
    </>
  );
};

export default Form;
