import {put, takeLatest, all} from 'redux-saga/effects';
import uuid from 'uuid/v4';
import {addToDo, deleteTodo, readToDo,updateTodo} from '../TaskReducers/Actions';
import {failureAlert, successAlert,successNotification, failureNotification} from '../UIReducers/Actions';
import axios from 'axios';
let url='http://localhost:4200/todos'

function* addTodo({firstName, title, description, date}){
    try{
        let data={id:uuid(), title, description, date, firstName};
        yield axios.post(url, data);
        yield put(addToDo({id, firstName, title, description, date}));
        yield put(successAlert({message:"Successfully created the todo"}));
    }
    catch(err){
        yield put(failureAlert({message:"Something went wrong while creating the todo"}));
    }
}


function* deleteTodo({id}){
    try{        
        yield axios.delete(url+`/${id}/`);
        yield put(successAlert({message:"Successfully deleted the todo"}));
        yield put(deleteTodo({id}));
    }
    catch(err){
        yield put(failureAlert({message:"Something went wrong while deleting the todo"}));
    }
}


function* updateTodo({id, firstName, title, description, date}){
    try{
        yield axios.put(url,{id, firstName, title, description, date});
        yield put(successAlert({message:"Successfully updated the todo"}));
        yield put(updateTodo(url,{id, firstName, title, description, date}));
    }
    catch(err){
        yield put(failureAlert({message:"Something went wrong while updating the todo"}));
    }
}

function* readToDo({id}){
    try{
        yield put(readToDo({id}));
    }
    catch(err){
        yield put(failureAlert({message:"Something went wrong while getting the todo details"}))
    }
}