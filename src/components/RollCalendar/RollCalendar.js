
import React, { useState } from 'react'
import './RollCalendar.css'

function RollCalendar(props){

    let [date, setDate] = useState(new Date(Date.now()));
    let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let months = ['January', 'February', "March", "April", "May", "June", 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let monthDays = generateCalendarRows(date);

    return(
            <div className='calendar'> 
                
                <div className='calendar-table-header'>
                    {weekDays.map(weekday => {return (<p key={weekday}>{weekday}</p>);})}
                </div>
                <div className='calendar-table-body'>
                    {monthDays.map(day => {
                        return(
                                <div onClick={() => setDate(day.date)} 
                                className={"calendar-day" + (day.current ? " current" : "") 
                                + (day.date.toDateString() === date.toDateString() ? " selected": "")} 
                                key={'' + day.month + day.number}><p >{day.number}</p></div>
                            );
                    })} 
                </div>
            </div>
            );
}

function generateCalendarRows(date){
    let first = new Date(date.getFullYear(), date.getMonth(), 1);
    let firstWeekday = first.getDay();
    let monthDays = [];

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
            current: first.getMonth() === date.getMonth(),
            number: first.getDate(),
            year: first.getFullYear()
          }

          monthDays.push(calendarDay);
    }

    return monthDays;
}

export default RollCalendar;