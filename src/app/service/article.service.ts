import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay, filter, find, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  Articles = [
    {
      id: '1',
      slug: 'bai-viet-1',
      title: 'Bai viet 1',
      content: 'Day la noi dung bai viet 1',
      updateAt: '2020-07-06T13:26:31.785Z',
    },
    {
      id: '2',
      slug: 'bai-viet-2',
      title: 'Bai viet 2',
      content: 'Day la noi dung bai viet 2 nhe',
      updateAt: '2020-07-15:00:00.000Z',
    },
  ];
  constructor() {}
  getArticles(): Observable<any> {
    return of(this.Articles);
  }

  getArticlesSlug(slug: any): Observable<any> {
    return from(this.Articles).pipe(
      delay(500),
      find((article: any) => article.slug === slug)
    );
  }
}
