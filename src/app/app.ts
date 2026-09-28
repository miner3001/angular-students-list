import { Component } from '@angular/core';
import { StudentsList } from './students-list/students-list';

@Component({
  selector: 'app-root',
  imports: [StudentsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'angular-student-list-2026';
}
