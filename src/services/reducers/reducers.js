import { ADD_TASK, ADD_TASK_LIST, DROP_MOVING } from "../constants/constants";

const initialState = {
  task: "",
  taskList: [],
  dropList: [],
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: action.payload,
      };
    case ADD_TASK_LIST:
      return {
        ...state,
        taskList: state.taskList.concat(action.payload),
        task: "",
      };
    case DROP_MOVING:
      return {
        ...state,
        taskList: state.taskList.concat(action.payload),
        dropList: action.payload,
      };

    default:
      return state;
  }
};

export default taskReducer;
