import React from 'react';
import './RollStats.css';
import RollList from '../roll-list';
import GeneralStats from '../GeneralStats/general-stats';
import RollDisplay from '../RollDisplay/RollDisplay';

class RollStats extends React.Component{

    constructor(props){
        super(props)
        this.state = {historyPosition: RollList.length-5}
    }

    render(){
        return(
        <div className='roll-stats'>
            <h1>Stats</h1>
            <GeneralStats rollEntryDate='12/28/23'></GeneralStats>
            <div className='roll-history-container'>

                <h2>Roll History</h2>
                <div className='roll-history'>
                    <span className={this.state.historyPosition != 0 ? 'nav active' : 'nav inactive'} onClick={() => this.updateHistoryPosition(true)}>&#10094;</span>
                    
                    <ul>{RollList.slice(this.state.historyPosition, this.state.historyPosition+5).map(item => {
                        return <li className='last-five-results' key={item.date}><RollDisplay value={item.value}></RollDisplay><br /> <p className='date'>{item.date}</p> </li>
                    })}
                    </ul>
                    
                    <span className={this.state.historyPosition != RollList.length-5 ? 'nav active' : 'nav inactive'} onClick={() => this.updateHistoryPosition(false)}>&#10095;</span>
                </div>
                
            </div>
        </div>
        ); 
    }

    updateHistoryPosition(down){
        if(down){
            if(this.state.historyPosition > 0){
                this.setState({historyPosition: (this.state.historyPosition-5 >= 0 ? this.state.historyPosition-5: 0)});
            }
        }
        else{
            if(this.state.historyPosition < RollList.length){
                this.setState({historyPosition: this.state.historyPosition+5 < RollList.length-5 ? this.state.historyPosition+5 : RollList.length-5});
            }
        }
    }
}

export default RollStats;