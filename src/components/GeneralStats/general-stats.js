import React from 'react'
import './general-stats.css'
import RollList from '../roll-list';

class GeneralStats extends React.Component{
    
    constructor(props){
        super(props);
        this.rollEntry = props.rollEntryDate;
        this.error = false;
        this.calculateStats();
    }

    calculateStats(){
        let index = RollList.findIndex(item => this.rollEntry == item.date);
        if(index == -1){
            this.error = true;
        } else{
            this.error = false;
            this.entry = RollList[index];
            let before = RollList.slice(0, index);
            let after = RollList.slice(index);
            console.log(before);
            console.log(after);
        }
    }

    render(){
        if(this.error){
            return(
                <div className='general-error-container'>
                    <h3>Something went wrong...</h3>
                    <p>Looks like we can't find this entry! '{this.rollEntry}'</p>
                </div>
            );
        }
        else return(
            <div className='general-stat-container'>
                <h3>Stats for the roll of {this.rollEntry}</h3>
                
            </div>
        );
    }
}

export default GeneralStats;