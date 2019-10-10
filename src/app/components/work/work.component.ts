import { Component, OnInit } from '@angular/core';
import { Work, WorkService } from '../../@core/services/work.service';
import { GlobalService } from '../../@core/services/global.service';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        query('@*', [
          style({ opacity: 0 }),
          stagger(-30, [
            animate('5s', style({ opacity: 1 })),
          ])
        ], { optional: true })
      ]),
      transition(':leave', [
        query('@*', [
          stagger(-30, [
            animate('5s', style({ opacity: 0 }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('pageAnimations', [
      transition(':enter', [
        query('.card', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(50, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ], { optional: true })
      ])
    ]),
  ]
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
    }, err => console.error(err), () => this.globals.isLoading = false);
  }
  goTo(work: Work) {
    window.open(work.link, '_blank');
  }
}
