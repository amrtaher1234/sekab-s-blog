import { Component, OnInit } from '@angular/core';
import { Work, WorkService } from './work.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  workArray: Work[];
  constructor(
    private globals: GlobalService,
    private workService: WorkService) { }

  ngOnInit() {
    this.globals.isLoading = true;
    this.workService.getWork().subscribe(data => {
      this.workArray = [] as Work[];
      data.forEach(d => {
        this.workArray.push(d.data() as Work);
      });
      console.log(this.workArray);
    }, err => console.error(err) , () => this.globals.isLoading = false);
  }

}
