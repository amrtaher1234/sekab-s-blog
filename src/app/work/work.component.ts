import { Component, OnInit } from '@angular/core';
import { Work, WorkService } from './work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  workArray: Work[];
  constructor(private workService: WorkService) { }

  ngOnInit() {
    this.workService.getWork().subscribe(data => {
      this.workArray = [] as Work[];
      data.forEach(d => {
        this.workArray.push(d.data() as Work);
      });
      console.log(this.workArray);
    }, err => console.error(err));
  }

}
