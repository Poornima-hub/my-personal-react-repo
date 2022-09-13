import React from 'react';
import ReactDOM from 'react-dom';
import './App9.css';

const portalRoot = document.getElementById("portal-root");

class Loading extends React.Component{

render(){
    return ReactDOM.createPortal(
        <div className="spinner-container">
            <div className='loading-spinner'></div>
        </div>, portalRoot,
    )
}
    
}

export default Loading;