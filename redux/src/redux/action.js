import { type } from "@testing-library/user-event/dist/type"

export const addTodoAction=(data) => {
    return{
        type:'ADDTODO',
        payload:data
    }
}


export const searchFilterChange =(data) => {
    return {
        type :'SEARCHNAME',
        payload:data
    }
}
export const searchPriorityChange =(data) => {
    return {
        type :'SEARCHPRIORITY',
        payload:data
    }
}