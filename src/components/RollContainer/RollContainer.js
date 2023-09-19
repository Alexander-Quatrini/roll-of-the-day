import React from 'react';
import './RollContainer.css'

class RollContainer extends React.Component{

    render(props){
        return(
            <div className='roll-container'>
                <p>{this.props.value}</p>
            </div>
        );
        
    }

}

export default RollContainer;