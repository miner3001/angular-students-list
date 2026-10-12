import { Component } from '@angular/core';
import { Student } from '../student/student';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [Student, FormsModule],
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

  towns: string[] = [
    "Topolinia", "Paperopoli", "Bra", "Alba", "Cuneo", "Fossano", "Saluzzo"
  ]

  studentName: string = "";
  studentGender: string = this.generaNumero(1, 3) == 1 ? "F" : "M";
  studentTown: string = this.towns[this.generaNumero(0, this.towns.length)];

  onAddStudent() {
    if (this.studentName.length == 0) {
      alert("Il nome è obbligatorio!");
      return;
    }

    let newStudent = {
      name: this.studentName,
      city: this.studentTown,
      gender: this.studentGender,
      present: true
    }
    this.students.push(newStudent);
  }

  onRemoveStudent(index: number) {
    this.students.splice(index, 1);
  }

  // Genera tra min e max con max escluso
  generaNumero(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
