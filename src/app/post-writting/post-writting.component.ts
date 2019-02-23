import { Component, OnInit } from '@angular/core';
import { Content, Post, ArticleService } from '../articles/article/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-writting',
  templateUrl: './post-writting.component.html',
  styleUrls: ['./post-writting.component.scss']
})
export class PostWrittingComponent implements OnInit {

  post: Post;
  toEdit = false;
  postDoc: string;
  contentArray: Content[];
  constructor(private articleService: ArticleService, private route: ActivatedRoute , private router: Router) {
    this.post = {} as Post;
    this.post.votes = 0;
    this.post.tag = ['s' , 's'];
    const tempContent = {} as Content;
    this.contentArray = [] as Content[];
    this.contentArray.push(tempContent);
   }
  ngOnInit() {
    this.postDoc = this.route.snapshot.paramMap.get('id');
    if (this.postDoc) {
      this.toEdit = true;
      this.articleService.getPostById(this.postDoc).then(post => {
        this.post = post.data() as Post;
        this.contentArray = post.data().content;
      }).catch(err => {
        console.error(err);
      });
    } else {
    this.post.post = '';
    }
  }
  addContent() {
    this.contentArray.push({});
  }
  removeContent(index) {
    this.contentArray.splice(index , 1);
  }
  createPost() {
    if (this.toEdit === false) {
    this.post.content = this.contentArray;
    this.post.time = new Date().toString();
    if (this.post.header && this.post.icon && this.post.content && this.post.post) {
      this.articleService.addPost(this.post).then(res => {
          this.post = {} as Post;
          this.contentArray = [] as Content[];
      }).catch(err => {
        console.error(err);
      });
    } else {
      alert('data is missing in the inputs');
    }
  } else {
    this.post.content = this.contentArray;
    this.articleService.updatePost(this.post , this.postDoc).then(res => {
    }).catch(err => {
      alert('error check console');
      console.error(err);
    });
  }
}
addCodeTags(i , lang) {
  if (!this.contentArray[i].text) {
    this.contentArray[i].text = ' ';
  }
  this.contentArray[i].text += `<code class=${lang}> </code>`;
  // document.getElementById(i).focus();
  try {
    document.getElementById(i).focus();
  } catch (er) {
    console.error(er);
  }
}

addTag(tag , options) {
  if (tag === 'code') {
    this.post.post += '\n' + `<pre><code class="${options}"> </code></pre>`;
  } else if (tag === 'img') {
    this.post.post += '\n' + `<img style="width:auto; max-width:100%;" src="${options}">`;
  } else if (tag === 'paragraph') {
    this.post.post += '\n' + `<p> </p>`;
  } else {
    this.post.post += `\n` + `<div class="mat-display-1">  </div>`;
  }
}

}
