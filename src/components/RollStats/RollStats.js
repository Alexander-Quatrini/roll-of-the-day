import React from 'react';
import './RollStats.css';
import RollList from '../roll-list';

class RollStats extends React.Component{

    render(){

        return(
        <div className='roll-stats'>
            <h1>Stats</h1>
            
            <div className='roll-history-container'>

                <h2>Roll History</h2>
                <div className='roll-history'>
                    <span className='nav'>&#10094;</span>
                    
                    <ul>{RollList.slice(-5).map(item => {
                        return <li className='last-five-results' key={item.date}><p className='values'> {item.value} </p> <br /> <p>{item.date}</p> </li>
                    })}
                    </ul>
                    
                    <span className='nav'>&#10095;</span>
                </div>
                
            </div>
        </div>
        ); 
    }
}

export default RollStats;