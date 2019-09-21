import React, { Component } from 'react';
import {connect} from 'react-redux';
import {failureAlert, failureNotification, modalToggle,successAlert,successNotification,warningNotification} from '../Store/UIStore/Actions';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4><u>Notifications</u></h4>
                <button className="btn btn-primary" style={{marginLeft:'5px', marginTop:'10px'}} onClick={()=>this.props.warningNotification({message:"Some random"})} >Warning Notification</button>
                <button className="btn btn-primary" style={{marginLeft:'5px', marginTop:'10px'}} onClick={()=>this.props.successNotification({message:"Some random"})} >Success Notification</button>
                <button className="btn btn-primary" style={{marginLeft:'5px', marginTop:'10px'}} onClick={()=>this.props.failureNotification({message:"Some random"})} >Failure Notification</button>
                <h4><u>Alerts</u></h4>
                <button className="btn btn-primary" style={{marginLeft:'5px', marginTop:'10px'}} onClick={()=>this.props.successAlert({message:"Some random message"})} >Success Alert</button>
                <button className="btn btn-primary" style={{marginLeft:'5px', marginTop:'10px'}} onClick={()=>this.props.failureAlert({message:"Some random message"})} >Failure Alert</button>
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        successNotification:({message})=>dispatch(successNotification({message})),
        failureNotification:({message})=>dispatch(failureNotification({message})),
        warningNotification:({message})=>dispatch(warningNotification({message})),
        successAlert:({message})=>dispatch(successAlert({message})),
        failureAlert:({message})=>dispatch(failureAlert({message}))
    }
}

export default connect(null, mapDispatchToProps)(Content);