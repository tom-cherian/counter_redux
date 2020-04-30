import { ADD_TODOS,DELETE_TODOS } from "./actionType";

export const addTodos = (content) => {
  return {
    type: ADD_TODOS,
  };
};

export const deleteTodos = () => {
    return {
      type: DELETE_TODOS,
    };
  };
  
