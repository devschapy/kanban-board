import { ADD_TASK, ADD_TASK_LIST,DROP_NEW_TASK, MOVE_TASK } from '../constants/constants';

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

export const dropNewTask = (dropTask) =>{
  return {
    type: DROP_NEW_TASK,
    payload: dropTask,
  }
} 

export const moveTask = (dropTask) =>{
  return {
    type: MOVE_TASK,
    payload: dropTask,
  }
} 

