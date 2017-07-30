import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ProgramsService } from '../programs.service';

@Component({
  selector: 'app-programs-detail',
  templateUrl: './programs-detail.component.html',
  styleUrls: ['./programs-detail.component.scss']
})
export class ProgramsDetailComponent implements OnInit, OnDestroy {

  programId: String= '';
  program: any= this.programsList.programs;
  isNew: Boolean = false;
  // Subscribe Declaration
  getProgramSubscribe: any;

  constructor(private route: ActivatedRoute,
  private programsList: ProgramsService,
  private location: Location) { }

  back() {
    this.location.back();
  }
  save() {
    // alert(this.isNew);
    this.isNew = true;
    if (this.isNew) {
      this.programsList.programs.push(this.program);
    }
    this.location.back();
  }
  ngOnInit() {
    this.getProgramSubscribe = this.route.params.subscribe(params => {
      this.getProgram(params['sid']).then(programs => {
      console.log('is' + programs);
      const sid = params['sid'];
      this.programId = programs[ sid - 1 ].id;
      this.program = programs[ sid - 1 ];
      // console.log(this.program);
    }).catch(err => {
      console.log(err);
    });
    });
  }

  ngOnDestroy() {
    this.getProgramSubscribe.unsubscribe();
  }

  getProgram(id: any): Promise<any> {
    const p = new Promise((resolve, reject) => {
      if (id === 'new') {
        const program = this.programsList.programs;
        this.isNew = true;
        resolve(program);
      }
      if (id !== '') {
        const program = this.programsList.programs;
        this.isNew = true;
        resolve(program);
      }
      console.log(this.programsList.programs);
      const program = this.programsList.programs[id - 1];
      // console.log(program);
      if (program) {
        resolve(program);
      }else {
        reject('program not found');
      }
    });
    // console.log(p);
    return p;
}
}
