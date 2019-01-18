import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss']
})
export class VoteButtonComponent implements OnInit {

  votes = 0;
  constructor() { }

  ngOnInit() {
  }
  clickMe() {
    this.votes++;

    this.animateCss('.vote-btn', 'jello', () => {
      console.log('finished');
    });
    this.animateCss('.number', 'bounce', () => { });
  }
  animateCss(element, animationName, callback) {
    const node = document.querySelector(element);
    console.log(node);
    node.classList.add(element, animationName);

    function handleAnimationEnd() {
      node.classList.remove(element, animationName);
      node.removeEventListener('animationend', handleAnimationEnd);

      if (typeof callback === 'function') {
        callback();
      }
    }

    node.addEventListener('animationend', handleAnimationEnd);
  }
}
