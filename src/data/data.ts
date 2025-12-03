export type Day = {
  label: string;
  date: string;
};
export type Event = {
  id: number;
  venue: string;
  start: string;
  end: string;
  title: string;
  day: string;
};


export const days: Day[] = [
  { label: 'Monday', date: '2025-12-01' },
  { label: 'Tuesday', date: '2025-12-02' },
  { label: 'Wednesday', date: '2025-12-03' },
  { label: 'Thursday', date: '2025-12-04' },
  { label: 'Friday', date: '2025-12-05' },
  { label: 'Saturday', date: '2025-12-06' },
  { label: 'Sunday', date: '2025-12-07' },
];

export const venues = [
  'Venue1',
  'Venue2',
  'Venue3',
  'Venue4',
  'Venue5',
  'Venue6',
  'Venue7',
  'Venue8',
];

export const events: Event[]= [
  {
    id: 1,
    venue: 'Venue1',
    start: '09:00',
    end: '09:30',
    title: 'Event1',
    day: '2025-12-01',
  },
  {
    id: 2,
    venue: 'Venue2',
    start: '10:00',
    end: '10:30',
    title: 'Event2',
    day: '2025-12-01',
  },
  {
    id: 3,
    venue: 'Venue3',
    start: '09:45',
    end: '11:00',
    title: 'Event3',
    day: '2025-12-02',
  },
  {
    id: 4,
    venue: 'Venue3',
    start: '11:00',
    end: '11:30',
    title: 'Event4',
    day: '2025-12-03',
  },
  {
    id: 5,
    venue: 'Venue4',
    start: '09:45',
    end: '11:00',
    title: 'Event5',
    day: '2025-12-03',
  },
  {
    id: 6,
    venue: 'Venue2',
    start: '11:45',
    end: '12:15',
    title: 'Event6',
    day: '2025-12-04',
  },
  {
    id: 7,
    venue: 'Venue2',
    start: '12:15',
    end: '13:30',
    title: 'Event7',
    day: '2025-12-01',
  },
];
