const initState = {
    filter: {
      search: "",
      status: "All",
      priority: [],
    },
    listItem: [],
  };
  
  const rootReducer = (state = initState, action) => {
  
    
    console.log(state, action);
    switch (action.type) {
      case "ADDTODO":
        return {
          ...state,
          todoList: [...state.todoList, action.payload],
        };
      case "SEARCHNAME":
        return {
          ...state,
          filter: {...state.filter,search: action.payload},
        };
      case "SEARCHPRIORITY":
        return {
          ...state,
          filter:{...state.filter,priority:action.payload}
        }
  
      default:
        return state;
    }
  };
  
  export default rootReducer;