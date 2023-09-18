import * as React from 'react';
import * as testjson from '../tempschedule.json';
import { duration } from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';


export interface ICalendarProps {
  value: string;
}


export class CalendarComponent extends React.Component<{}, {}>{
  render() {
    return (
      <div className='component'>
        <div className='calendar-container'>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={testjson.schedule}
            />
        </div>
      </div>
    );
  }
}