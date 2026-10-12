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
    { name: 'Pippo', city: 'Topolinia', gender: 'M', present: true },
    { name: 'Pluto', city: 'Topolinia', gender: 'M', present: false },
    { name: 'Paperina', city: 'Paperopoli', gender: 'F', present: true },
    { name: 'Gastone', city: 'Paperopoli', gender: 'M', present: true },
    { name: 'Minnie', city: 'Topolinia', gender: 'F', present: false },
  ];

  towns: string[] = ['Topolinia', 'Paperopoli', 'Bra', 'Alba', 'Cuneo', 'Fossano', 'Saluzzo'];

  studentName = '';
  studentGender = 'M';
  studentTown = this.towns[0];

  onAddStudent() {
    const trimmedName = this.studentName.trim();

    if (!trimmedName) {
      alert('Il nome è obbligatorio!');
      return;
    }

    const newStudent = {
      name: trimmedName,
      city: this.studentTown,
      gender: this.studentGender,
      present: true,
    };

    this.students.push(newStudent);
    this.studentName = '';
    this.studentGender = 'M';
    this.studentTown = this.towns[0];
  }

  onRemoveClick(index: number) {
    this.students.splice(index, 1);
  }

  onPresentClick(index: number) {
    if (this.students[index]) {
      this.students[index].present = !this.students[index].present;
    }
  }

  // Genera tra min e max con max escluso
  generaNumero(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
