import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ProgramsService } from '../programs.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  @Input() program: any;
  @Output() programClick = new EventEmitter<any>();
  constructor(private programsList: ProgramsService) { }
  onStudentClick() {
    this.programClick.emit(this.program);
  }
  check() {
    if (this.program.check && this.program.check === true) {
      this.program.check = false;
    }else {
      this.program.check = true;
    }
  }
  isChecked() {
    if (this.program.check && this.program.check === true) {
      return true;
    }else {
      return false;
    }
  }
  ngOnInit() {}

}
