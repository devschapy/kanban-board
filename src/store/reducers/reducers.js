import { ADD_TASK, ADD_TASK_LIST, MOVE_TASK, DROP_NEW_TASK} from "../constants/constants";
import {data} from '../../data'

const initialState = {
  item: "",
  items: data,
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        item: action.payload,
      };
    case ADD_TASK_LIST:
      return {
        ...state,
        items: state.items.concat(action.payload),
        item: "",
      };
    
    case MOVE_TASK:
      return{
        ...state,
        items: action.payload
      }
    
    case DROP_NEW_TASK: 
      
      return {
        ...state,
        items: action.payload
      }

    default:
      return state;
  }
};

export default taskReducer;
