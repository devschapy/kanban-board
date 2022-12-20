import React from "react";
import Input from "./form/Input";
import Button from "./buttons/Button";
import { addTask } from "../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const CreateTask = ({ onTaskAdd }) => {
  const dispatch = useDispatch();
  const { item } = useSelector(state => state);

  const onChangeHandler = (e) => dispatch(addTask(e.target.value));

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = { id: Math.random().toString(), content: item, status: "open", };
    onTaskAdd(newTask);
  };

  return (
    <form className="container py-6 space-y-3 md:space-y-6 pt-14 md:pt-20" onSubmit={submitHandler}>
      <h2 className="text-center text-gray-700 font-bold text-xl md:text-3xl">
        Create Your Tasks
      </h2>

      <div className="flex justify-center gap-2 md:gap-4">
        <Input
          onChange={onChangeHandler}
          type="text"
          divStyle="w-8/12 md:w-6/12"
          placeholder="Write your task ..."
          value={item}
        />
        <Button type="submit" text="Add Task" />
      </div>
    </form>
  );
};

export default CreateTask;
