import * as actions from './ActionTypes';


const initialStore={
    selectedToDo:null,
    todos:[]
}


const reducer=(state=initialStore, action)=>{
    switch(action.type){
        case actions.addTodo:
            return {...state, todos:[...state.todos, action.payload]}
        case actions.deleteToDo:
            return {...state, todos:state.todos.filter(item=>item.id!=action.payload)}
        case actions.updateToDo:
            return {...state, todos:state.todos.map(item=>{
                if(item.id==action.payload.id){
                    return action.payload;
                }
            })}
        case actions.readToDo:
            return {...state, selectedToDo:todos.filter(item=>item.id==action.payload)};
        default:
            return;
    }
}



export default reducer;