import * as actions from './ActionTypes';

/* Alerts */
export const successAlert=({message})=>({type:actions.successAlert, payload:message});
export const failureAlert=({message})=>({type:actions.failureAlert, payload:message});


/* Notifications */
export const successNotification=({message})=>({type:actions.successNotification, payload:message});
export const failureNotification=({message})=>({type:actions.failureNotification, payload:message});
export const warningNotification=({message})=>({type:actions.warningNotification, payload:message});


/* Modal Toggle */
export const modalToggle=()=>({type:actions.modalToggle});