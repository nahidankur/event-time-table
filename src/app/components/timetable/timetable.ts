import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroCustomModule } from '../../shared/ng-zorro-custom.module';
import { EventItem } from '../../models/event.model';
import { Day, days, events, venues } from '../../../data/data';

@Component({
  selector: 'app-timetable',
  imports: [CommonModule, NgZorroCustomModule],
  templateUrl: './timetable.html',
  styleUrls: ['./timetable.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timetable {
  days: Day[] = days;
  venues = venues;
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
      this.events = events;
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
