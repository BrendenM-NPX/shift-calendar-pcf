import * as React from 'react';
import { duration } from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';



export interface ICalendarProps {
  value: string;
}

const testjson = [
  {
      "title": "test shift 1",
      "date": "2023-09-07",
      "description": "7:00am-7:00pm",
      "classNames": ['crew-a']
  },
  {
      "title": "test shift 2",
      "date": "2023-09-07",
      "description": "7:00am-7:00pm",
      "classNames": ['crew-b']
  },
  {
      "title": "Crew C - Day Shift 7:00am-7:00pm",
      "date": "2023-09-19",
      "description": "7:00am-7:00pm",
      "classNames": ['crew-c']
  },
  {
      "title": "test shift 4",
      "date": "2023-09-21",
      "description": "7:00am-7:00pm",
      "classNames": ['crew-d']
  },
  {
      "title": "test shift 5",
      "date": "2023-09-23",
      "description": "7:00am-7:00pm",
      "classNames": ['crew-e']
  }
]



export class CalendarComponent extends React.Component<{}, {}>{
  render() {
    return (
      <div className='component'>
        <div className='calendar-container'>
          <FullCalendar
            plugins={[dayGridPlugin]}
            defaultTimedEventDuration={'12:00'}
            forceEventDuration={true}
            initialView='dayGridMonth'
            events={testjson}
            />
        </div>
      </div>
    );
  }
}