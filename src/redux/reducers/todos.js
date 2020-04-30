import { ADD_TODOS, DELETE_TODOS } from "../actionType";

const initialState = {
  numOfTodos: 10,
};

const todos = (state = initialState, action) => {
  console.log(state.numOfTodos);
  switch (action.type) {
    case ADD_TODOS: {
      return {
        ...state,
        numOfTodos: state.numOfTodos + 1,
      };
    }
    case DELETE_TODOS: {
      return {
        ...state,
        numOfTodos: state.numOfTodos - 1,
      };
    }
    default:
      return state;
  }
};

export default todos;
