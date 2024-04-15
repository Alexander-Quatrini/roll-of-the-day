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
        <div className='container'>

            <div className='general-stat-container'>
                <h3>{entryStats.entry.date}</h3>
                <RollDisplay value= {entryStats.entry.value}></RollDisplay>
            </div>

            <p>The value {entryStats.entry.value} has been rolled before this date {entryStats.numBefore} time(s)!</p>
            <p>The value {entryStats.entry.value} has been rolled {entryStats.numTotal} time(s) total!</p>
        </div>
    );
}

function calculateStats(rollDate){
    let index = RollList.findIndex(item => rollDate == item.date);
    if(index == -1){
        return undefined
    }else{
        let entry = RollList[index]
        let before = RollList.slice(0, index)
        let after = RollList.slice(index)

        let numBefore = before.filter(compare => { return compare.value == entry.value}).length
        let numAfter = after.filter(compare => { return compare.value == entry.value}).length
        return({
            entry,
            numBefore,
            numAfter,
            numTotal: numBefore + numAfter,
        })
    }
}

export default GeneralStats;