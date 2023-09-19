import React from 'react';
import './RollContainer.css'

class RollContainer extends React.Component{

    render(props){
        return(
            <div className='roll-container'>
                <h1>Today's Roll of the Day Is...</h1>
                <h2>{this.props.value}</h2>
            </div>
        );
        
    }

}

export default RollContainer;