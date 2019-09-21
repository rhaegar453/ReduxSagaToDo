import * as actions from './ActionTypes';


export const readToDo=({id})=>({type:actions.readToDo, payload:id});
export const addToDo=({id,firstName, title, description, date})=>({type:actions.addTodo, payload:{id, firstName, title, description, date}});
export const deleteTodo=({id})=>({type:actions.deleteToDo, payload:id});
export const updateTodo=({id, firstName, title,  description, date})=>({type:actions.updateToDo, payload:{id, firstName, title, description, date}});
