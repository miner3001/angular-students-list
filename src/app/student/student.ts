import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {
  @Input() item: any;
  @Input() index = 0;
  @Output() removeStudentEvent = new EventEmitter<any>();
  M_COLOR = 'lightblue';
  F_COLOR = 'pink';

  getStyle(s: any) {
    return {
      backgroundColor: s.gender === 'F' ? this.F_COLOR : this.M_COLOR,
      textDecoration: s.present ? 'none' : 'underline',
      'font-weight': s.present ? 'normal' : 'bold',
    };
  }

  onPresentClick() {
    if (this.item) {
      this.item.present = !this.item.present;
    }

    this.removeStudentEvent.emit(this.item);
  }
}
