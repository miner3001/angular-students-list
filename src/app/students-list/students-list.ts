import { Component } from '@angular/core';
import { Student } from '../student/student';

@Component({
  imports: [Student],
  selector: 'app-students-list',
  styleUrl: './students-list.css',
  templateUrl: './students-list.html',
})
export class StudentsList {
  students: any[] = [
    { name: "Pippo", city: "Topolinia", gender: "M", present: true },
    { name: "Pluto", city: "Topolinia", gender: "M", present: false },
    { name: "Paperina", city: "Paperopoli", gender: "F", present: true },
    { name: "Gastone", city: "Paperopoli", gender: "M", present: true },
    { name: "Minnie", city: "Topolinia", gender: "F", present: false }
  ];
}
