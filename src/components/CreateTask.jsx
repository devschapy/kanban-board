import React, {useState} from "react";
import Input from "./form/Input";
import Button from "./buttons/Button";


const CreateTask = ({onTaskAdd}) => {
  const [task, setTask] = useState('');
  const onChangeHandler = (e) => setTask(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = { id: Math.random().toString(), content: task, status: "open", };
    onTaskAdd(newTask);
    setTask('');
  };

  return (
    <form className="container py-6 space-y-6 pt-20" onSubmit={submitHandler}>
      <h2 className="text-center text-gray-700 font-bold text-3xl">
        Create Your Tasks
      </h2>

      <div className="flex justify-center gap-4">
        <Input
          onChange={onChangeHandler}
          type="text"
          divStyle="md:w-6/12"
          placeholder="Write your task ..."
          value={task}
        />
        <Button type="submit" text="Add Task" />
      </div>
    </form>
  );
};

export default CreateTask;
