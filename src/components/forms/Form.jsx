import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";
import { addRows } from "features/tableSlice";

const Form = () => {
  const [inputVal, setInputVal] = useState({ priority: "", name: "" });
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addRows(inputVal.priority, inputVal.name));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="number"
            value={inputVal.priority}
            name="priority"
            onChange={changeHandler}
            className="grow"
            placeholder="priority"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            value={inputVal.name}
            name="name"
            onChange={changeHandler}
            className="grow"
            placeholder="name"
          />
        </label>
        <button type="submit" className="btn btn-info">
          Info
        </button>
      </form>

      <Table />
    </div>
  );
};

export default Form;
