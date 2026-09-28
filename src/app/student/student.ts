import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {
  @Input() item: any;
  @Input() index: number = 0;

  M_COLOR = "lightblue";
  F_COLOR = "pink";

  getStyle(s: any){
    return {
      'backgroundColor': s.gender == 'F' ? this.F_COLOR : this.M_COLOR,
      'textDecoration':s.present ? 'none' : 'underline',
      'font-weight': s.present ? 'normal' : 'bold'
    }
  }
}
