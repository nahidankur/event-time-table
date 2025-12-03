import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroCustomModule } from '../../shared/ng-zorro-custom.module';

interface EventItem {
  id: number;
  venue: string;
  start: string;
  end: string;
  title: string;
  day: string;
  top?: number;
  height?: number;
}

@Component({
  selector: 'app-timetable',
  imports: [CommonModule, NgZorroCustomModule],
  templateUrl: './timetable.html',
  styleUrls: ['./timetable.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timetable {
  days = [
    { label: 'Monday', date: '2025-12-01' },
    { label: 'Tuesday', date: '2025-12-02' },
    { label: 'Wednesday', date: '2025-12-03' },
    { label: 'Thursday', date: '2025-12-04' },
    { label: 'Friday', date: '2025-12-05' },
    { label: 'Saturday', date: '2025-12-06' },
    { label: 'Sunday', date: '2025-12-07' },
  ];

  venues = [
    'Venue1',
    'Venue2',
    'Venue3',
    'Venue4',
    'Venue5',
    'Venue6',
    'Venue7',
    'Venue8',
  ];

  timeSlots: string[] = [];
  slotHeight = 40;
  selectedDay: string = this.days[0].date;

  events: EventItem[] = [];

  ngOnInit(): void {
    this.loadEvents();
    this.generateTimeSlots();
    this.computeEventPositions();
  }

  loadEvents() {
    const savedEvents = localStorage.getItem('timetableEvents');
    if (savedEvents) {
      this.events = JSON.parse(savedEvents);
    } else {
      this.events = [
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
      this.saveEvents();
    }
  }

  saveEvents() {
    localStorage.setItem('timetableEvents', JSON.stringify(this.events));
  }

  generateTimeSlots() {
    for (let h = 9; h <= 23; h++) {
      for (let m = 0; m < 60; m += 15) {
        this.timeSlots.push(
          `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
        );
      }
    }
  }

  timeToIndex(time: string): number {
    const [h, m] = time.split(':').map(Number);
    return (h - 9) * 4 + m / 15;
  }

  computeEventPositions() {
    this.events = this.events.map((e) => {
      const startIndex = this.timeToIndex(e.start);
      const endIndex = this.timeToIndex(e.end);

      return {
        ...e,
        top: startIndex * this.slotHeight,
        height: (endIndex - startIndex) * this.slotHeight + 40,
      };
    });
  }

  computeStyle(ev: EventItem) {
    return {
      top: ev.top + 'px',
      height: ev.height + 'px',
      width: '250px',
      left: this.venues.indexOf(ev.venue) * 250 + 'px',
    };
  }

  selectDay(date: string) {
    this.selectedDay = date;
    this.computeEventPositions();
  }

  get filteredEvents(): EventItem[] {
    return this.events.filter((ev) => ev.day === this.selectedDay);
  }
}
