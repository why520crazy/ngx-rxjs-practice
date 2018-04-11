import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { states } from './app.state';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot(states)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
