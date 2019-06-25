import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writing-block',
  templateUrl: './writing-block.component.html',
  styleUrls: ['./writing-block.component.scss']
})
export class WritingBlockComponent implements OnInit {
  postContent: any;
  title: any;
  constructor() { }

  ngOnInit() {
  }

}
/*
post content.
header -> content ->
*/
