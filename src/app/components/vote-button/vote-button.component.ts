import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from 'src/app/articles/article/article.service';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss']
})
export class VoteButtonComponent implements OnInit {

  @Input() votes: number;
  @Input() post_id: string;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
  }
  clickMe() {
    this.votes++;
    document.getElementById('container').classList.add('opacity-pump');
    this.animateCss('.vote-btn', 'jello', () => {
      document.getElementById('container').classList.remove('opacity-pump');
    });
    this.animateCss('.number', 'bounceIn', () => { });
    this.articleService.upVote(this.post_id , this.votes);
  }
  animateCss(element, animationName, callback) {
    const node = document.querySelector(element);
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
