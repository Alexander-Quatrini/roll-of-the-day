import React from 'react'
import './RollCalendar.css'
class RollCalendar extends React.Component{
    constructor(props){
        super(props);
        this.state = { date: new Date(Date.now())};
        this.weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.months = ['January', 'February', "March", "April", "May", "June", 'July', 'August', 'September', 'October', 'November', 'December']
        this.generateCalendarRows();
        this.updateSelectedDateEvent = this.updateSelectedDateEvent.bind(this);
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
                current: first.getMonth() === this.state.date.getMonth(),
                number: first.getDate(),
                year: first.getFullYear()
              }

              this.monthDays.push(calendarDay);
        }
    }

    render(){
        return(
            <div className='calendar'> 
                
                <div className='date-picker'> 
                    <input type='date' id='start' defaultValue=
                    {this.state.date.getFullYear() + "-" + (this.state.date.getMonth()+1).toString().padStart(2, '0')
                    + "-" + this.state.date.getDate().toString().padStart(2, '0')}
                    onChange={this.updateSelectedDateEvent}/>
                </div>

                <div className='calendar-table-header'>
                    {this.weekDays.map(weekday => {return (<p key={weekday}>{weekday}</p>);})}
                </div>
                <div className='calendar-table-body'>
                    {this.monthDays.map(day => {
                        return(
                                <div onClick={() => this.updateSelectedDate(day)} 
                                className={"calendar-day" + (day.current ? " current" : "") 
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

    updateSelectedDateEvent(event){
        let dateSplit = event.target.value.split('-');
        this.setState({date: new Date(Number(dateSplit[0]), Number(dateSplit[1]-1), Number(dateSplit[2]))});
    }
}

export default RollCalendar;