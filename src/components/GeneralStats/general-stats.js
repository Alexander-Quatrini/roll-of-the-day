import React from 'react'
import './general-stats.css'
import RollList from '../roll-list';
import RollDisplay from '../RollDisplay/RollDisplay';

function GeneralStats(props){
    
    let entryStats = calculateStats(props.rollEntryDate);

    if(entryStats === undefined){
        return(
            <div className='general-error-container'>
                <h3>Something went wrong...</h3>
                <p>Looks like we can't find this entry! '{props.rollEntryDate}'</p>
            </div>
        );
    }
    else return(
        <div className='general-stat-container'>
            <h3>{entryStats.entry.date}</h3>
            <RollDisplay value= {entryStats.entry.value}></RollDisplay>
            
        </div>
    );
}

function calculateStats(rollDate){
    let index = RollList.findIndex(item => rollDate == item.date);
    if(index == -1){
        return undefined
    }else{
        return({
            entry: RollList[index],
            before: RollList.slice(0, index),
            after: RollList.slice(index),
        })
    }
}

export default GeneralStats;