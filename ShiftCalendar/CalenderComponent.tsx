import * as React from 'react';
import * as testjson from '../tempschedule.json';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventContentArg } from '@fullcalendar/core';


export interface ICalendarProps {
  value: string;
}

const eventContent = (arg: EventContentArg) => {

  let description = arg.event.extendedProps.description;

return (
  <div>
    <div className="fc-title">{arg.event.title}</div>
    <div className="fc-description">{description}</div>
  </div>
  );
};

export class CalendarComponent extends React.Component<{}, {}>{
  render() {
    return (
      <div className='component'>
        <div className='calendar-container'>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={testjson.schedule}
            eventContent={eventContent}
            />
        </div>
      </div>
    );
  }
}