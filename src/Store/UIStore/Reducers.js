import * as actions from './ActionTypes';
import Swal from 'sweetalert2';
import toastr from 'toastr';


const initialStore = {
    globalLoading: false,
    modalOpen: false
}


const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case actions.successAlert:
            Swal.fire({ type: 'success', timer: '1500', title: action.payload })
            return state;
        case actions.failureAlert:
            Swal.fire({ type: 'error', timer: '1500', title: action.payload });
            return state;
        case actions.successNotification:
            toastr.success(action.payload, "Success", {timeOut:'2000', progressBar:true,newestOnTop:true, closeButton:true});
            return state;
        case actions.failureNotification:
            toastr.error(action.payload, "Failure", {timeOut:'2000', progressBar:true,newestOnTop:true, closeButton:true});
            return state;
        case actions.warningNotification:
            toastr.warning(action.payload, "Warning", {timeOut:'2000', progressBar:true,newestOnTop:true, closeButton:true});
            return state;
        case actions.modalToggle:
            return { ...state, modalOpen: !state.modalOpen }
        default:
            return state;
    }
}


export default reducer;