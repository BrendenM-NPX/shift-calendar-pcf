import * as React from 'react';
import Calendar from 'react-calendar';


export interface ICalendarProps {
  value: string;
}


export class CalendarComponent extends React.Component<{}, {}>{
  render() {
    return (
      <div className='component'>
        <div className='calendar-container'>
          <Calendar minDetail="month" maxDetail="month" defaultView="month">
          </Calendar>
        </div>

      </div>
    );
  }
}


