import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { Child3Component } from './components/child3/child3.component';
import { Child4Component } from './components/child4/child4.component';
import { Child5Component } from './components/child5/child5.component';
import { Child6Component } from './components/child6/child6.component';
import { Child7Component } from './components/child7/child7.component';
import { Child8Component } from './components/child8/child8.component';
import { Child9Component } from './components/child9/child9.component';
import { Child10Component } from './components/child10/child10.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component,
    Child6Component,
    Child7Component,
    Child8Component,
    Child9Component,
    Child10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
