import React from "react";
import './RollDisplay.css'

class RollDisplay extends React.Component{
    constructor(props){
        super(props);
        this.value = this.props.value;
    }

    render(){
        return(
            <div className={this.props.large ? 'roll-display-container-large' : 'roll-display-container'}><p className="value">{this.value}</p></div>
        );
    }

}

export default RollDisplay;