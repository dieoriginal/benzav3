import React from 'react';
import { Calendar } from '@/components/ui/full-calendar';

interface CalendarEvent {
  id: string;
  start: Date;
  end: Date;
  title: string;
  color: string;
}

interface CalendarProps {
  events: CalendarEvent[];
  view?: 'month' | 'week' | 'day';
  onEventClick?: (event: CalendarEvent) => void;
  onDateSelect?: (start: Date, end: Date) => void;
  height?: string;
}

export default function CalendarComponent(): React.JSX.Element {
  const handleEventClick = (event: CalendarEvent): void => {
    console.log('Event clicked:', event);
  };

  const handleDateSelect = (start: Date, end: Date): void => {
    console.log('Date selected:', { start, end });
  };

  return (
    <Calendar
      events={[
        {
          id: '1',
          start: new Date('2024-08-26T09:30:00Z'),
          end: new Date('2024-08-26T14:30:00Z'),
          title: 'Meeting with John',
          color: 'pink',
        },
        {
          id: '2',
          start: new Date('2024-08-26T10:00:00Z'),
          end: new Date('2024-08-26T10:30:00Z'),
          title: 'Project Review',
          color: 'blue',
        },
      ]}
      view="month"
      onEventClick={handleEventClick}
      onDateSelect={handleDateSelect}
      height="600px"
    />
  );
}
