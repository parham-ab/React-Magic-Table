import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { addRows } from "features/tableSlice";
import formSchema from "utils/validations/form";
import sparks from "assets/sparks.svg";
import toast from "react-hot-toast";
import { hasDuplicateValues } from "../../utils/hasDuplicateValues";
import SubmitButton from "../common/SubmitButton";
import TableContent from "./TableContent";

const Form = () => {
  const rows = useSelector((state) => state.rows);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid, isSubmitting, isSubmitSuccessful },
    setValue,
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);
  const submitHandler = (data) => {
    if (
      hasDuplicateValues([...rows, { priority: data.priority }], "priority")
    ) {
      toast.error("Duplicate priority! Please choose a different priority.");
      return;
    }
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
        <SubmitButton
          title={"Add"}
          isDirty={isDirty}
          isValid={isValid}
          isSubmitting={isSubmitting}
        />
      </form>
      <TableContent />
    </>
  );
};

export default Form;
