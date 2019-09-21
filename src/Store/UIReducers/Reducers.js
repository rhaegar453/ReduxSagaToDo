import * as actions from './ActionTypes';

const initialState={
    loading:false
}


const reducer=(state=initialState, action)=>{
    switch(action.payload){
        case actions.successAlert:
            /* Success Alert function here*/
            return state;
        case actions.failureAlert:
            /* Failure alert function here */    
            return state;
        case actions.successNotification:
            /* Success Notification here */
            return state;
        case actions.failureNotification:
            /* Failure Notification here */
            return state;
        case actions.warningNotification:
            /* Warning Notification here */
            return state;
        default:
            return state;
    }
}

export default reducer;