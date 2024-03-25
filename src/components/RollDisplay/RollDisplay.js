import React from "react";
import './RollDisplay.css'

function RollDisplay(props){
    return(

        <div className={props.large ? 'roll-display-container-large' : 'roll-display-container'}><p className="value">{props.value}</p></div>

    );

}

export default RollDisplay;