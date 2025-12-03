import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Timetable } from './components/timetable/timetable';
import { CommonModule } from '@angular/common';
import { NgZorroCustomModule } from './shared/ng-zorro-custom.module';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Timetable, NgZorroCustomModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
