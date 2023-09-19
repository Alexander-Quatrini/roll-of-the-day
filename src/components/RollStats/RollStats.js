import React from 'react';

class RollStats extends React.Component{

    render(){

        return(
        <div className='roll-stats'>
            <h1>Stats</h1>
            <ul>{this.props.list.slice(-5).map(item => {
                    return <li key={item.date}>{item.value}</li>
                })}
            </ul>
        </div>
        ); 
    }
}

export default RollStats;