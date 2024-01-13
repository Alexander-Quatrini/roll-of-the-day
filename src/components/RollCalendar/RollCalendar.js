import React from 'react'
import './RollCalendar.css'
class RollCalendar extends React.Component{
    constructor(props){
        super(props);
        this.state = { date: new Date(Date.now())};
        this.weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.months = ['January', 'February', "March", "April", "May", "June", 'July', 'August']
        this.generateCalendarRows();
    }

    generateCalendarRows(){
        let first = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), 1);
        let firstWeekday = first.getDay();
        this.monthDays = [];

        for(let day = 0; day < 42; day++){
            if (day === 0 && firstWeekday === 0) {
                first.setDate(first.getDate() - 7);
              } else if (day === 0) {
                first.setDate(first.getDate() + (day - firstWeekday));
              } else {
                first.setDate(first.getDate() + 1);
              }

              let calendarDay = {
                date: (new Date(first)),
                month: first.getMonth(),
                number: first.getDate(),
                year: first.getFullYear()
              }

              this.monthDays.push(calendarDay);
        }
    }

    render(){
        return(
            <div className='calendar'> <p>{this.months[this.state.date.getMonth()]} {this.state.date.getDate()}, {this.state.date.getFullYear()}</p>
                <div className='calendar-table-header'>
                    {this.weekDays.map(weekday => {return (<p key={weekday}>{weekday}</p>);}
                    )}
                    
                </div>
                <div className='calendar-table-body'>
                    {this.monthDays.map(day => {
                        return(
                                <div onClick={() => this.updateSelectedDate(day)} 
                                className={"calendar-day" + (day.date.getMonth() === this.state.date.getMonth() ? " current" : "") 
                                + (day.date.toDateString() === this.state.date.toDateString() ? " selected": "")} 
                                key={'' + day.month + day.number}><p >{day.number}</p></div>
                            );
                    })} 
                </div>
            </div>
            );
    }

    updateSelectedDate(day){
        this.setState({date: day.date});
    }
}

export default RollCalendar;