import React, { Component } from 'react';

class InvisiButt extends React.Component {
    render () {
       return (
            <div>
            
            <button 
                id="invisiButton"
                onClick = {() => this.props.onClick()}>
                {this.props.visible ? "HIDE COMPLETED" : "SHOW COMPLETED"}
                </button>
            </div>
       ) 
    }
}


export default InvisiButt;