import React from 'react';
import './RollStats.css';
import RollList from '../roll-list';

class RollStats extends React.Component{

    render(){

        return(
        <div className='roll-stats'>
            <h1>Stats</h1>
            
            <div className='last-five'>

                <h2>Last 5 Rolls</h2>
                <ul>{RollList.slice(-5).map(item => {
                    return <li className='last-five-results' key={item.date}><p className='values'> {item.value} </p> <br /> <p>{item.date}</p> </li>
                })}
                </ul>
                
            </div>
        </div>
        ); 
    }
}

export default RollStats;