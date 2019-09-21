import * as actions from './ActionTypes';


/* Notification Actions */
export const successNotification=({message})=>({type:actions.successNotification, payload:message});
export const warningNotification=({message})=>({type:actions.warningNotification, payload:message});
export const failureNotification=({message})=>({type:actions.failureNotification, payload:message});

/* Alert Actions */
export const failureAlert=({message})=>({type:actions.failureAlert, payload:message});
export const successAlert=({message})=>({type:actions.successAlert, payload:message});





