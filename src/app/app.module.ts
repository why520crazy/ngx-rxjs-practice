import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { states } from './app.state';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot(states)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
