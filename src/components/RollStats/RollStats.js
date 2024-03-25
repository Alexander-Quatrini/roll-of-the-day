import React from 'react';
import './RollStats.css';
import RollList from '../roll-list';
import GeneralStats from '../GeneralStats/general-stats';
import RollDisplay from '../RollDisplay/RollDisplay';

function RollStats(props){

    return(
    <div className='roll-stats'>
        <h1>Stats</h1>
        <GeneralStats rollEntryDate='12/28/23'></GeneralStats>
        <div className='roll-history-container'>

            <h2>Last 5 Recorded Rolls</h2>
            <div className='roll-history'>
                <ul>{RollList.slice(-5).map(item => {
                    return <li className='last-five-results' key={item.date}><RollDisplay value={item.value}></RollDisplay><br /> <p className='date'>{item.date}</p> </li>
                })}
                </ul>
            </div>
            
        </div>
    </div>
    ); 
}

export default RollStats;