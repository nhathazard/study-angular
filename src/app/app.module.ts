import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './component/article/article.component';
import { ArticleDetailComponent } from './component/article-detail/article-detail.component';
import { ArticleModule } from './article/article.module';

@NgModule({
  declarations: [AppComponent, ArticleComponent, ArticleDetailComponent],
  imports: [BrowserModule, ArticleModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
