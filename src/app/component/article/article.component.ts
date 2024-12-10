import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  articles: any;
  constructor(private api: ArticleService) {}

  ngOnInit(): void {
    this.api.getArticles().subscribe((value) => {
      this.articles = value;
    });
  }
}
