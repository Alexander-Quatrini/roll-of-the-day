import React from 'react';
import './RollStats.css';

class RollStats extends React.Component{

    render(){

        return(
        <div className='roll-stats'>
            <h1>Stats</h1>
            
            <div className='last-five'>

                <h2>Last 5 Rolls</h2>
                <ul>{this.props.list.slice(-5).map(item => {
                    return <li className='last-five-results' key={item.date}><h5>{item.date}</h5> <br /> <p> {item.value} </p></li>
                })}
                </ul>
                
            </div>
        </div>
        ); 
    }
}

export default RollStats;