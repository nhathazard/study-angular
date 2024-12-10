import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './component/article/article.component';
import { ArticleDetailComponent } from './component/article-detail/article-detail.component';

const routes: Routes = [
  {
    path: ':slug',
    component: ArticleDetailComponent,
  },
  {
    path: '',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
