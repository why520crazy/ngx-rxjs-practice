import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { states } from './app.state';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { MessageComponent } from './message/message.component';
import { appRouters } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardResolver } from './dashboard.resolver';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot(states),
    appRouters
  ],
  providers: [
    DashboardResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
