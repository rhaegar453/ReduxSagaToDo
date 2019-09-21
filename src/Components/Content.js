import React, { Component } from 'react';


export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4><u>Notifications</u></h4>
                <button className="btn btn-primary" style={{marginLeft:'5px', marginTop:'10px'}}>Warning Notification</button>
                <button className="btn btn-primary" style={{marginLeft:'5px', marginTop:'10px'}}>Success Notification</button>
                <button className="btn btn-primary" style={{marginLeft:'5px', marginTop:'10px'}}>Failure Notification</button>
                <h4><u>Alerts</u></h4>
                <button className="btn btn-primary" style={{marginLeft:'5px', marginTop:'10px'}}>Success Alert</button>
                <button className="btn btn-primary" style={{marginLeft:'5px', marginTop:'10px'}}>Failure Alert</button>
            </div>
        );
    }
}