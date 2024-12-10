import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: ArticleService) {}
  article: any;
  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.api
      .getArticlesSlug(this.route.snapshot.paramMap.get('slug'))
      .subscribe((value) => {
        console.log('value', value);
        this.article = value;
      });
  }
}
