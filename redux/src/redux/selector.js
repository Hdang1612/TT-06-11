export const todoListSelector = (state) => {
    const searchText= searchSelector(state)
    const todoRemaining= state.todoList.filter((todo)=> {
        return todo.name.includes(state.filter.search)
    })
    return todoRemaining
}
export const searchSelector = (state) => {
    return state.filter.search
}