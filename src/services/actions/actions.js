import { ADD_TASK, ADD_TASK_LIST, DROP_MOVING } from '../constants/constants';

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
}
export const addTaskList = (tasks) => {
  return {
    type: ADD_TASK_LIST,
    payload: tasks,
  };
}

export const dropMoving = (tasks) => {
  return {
    type: DROP_MOVING,
    payload: tasks,
  };
}