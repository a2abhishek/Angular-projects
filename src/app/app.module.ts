import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { GendercheckPipe } from './gendercheck.pipe';
import { ReversePipe } from './reverse.pipe';
import { GenderlistPipe } from './genderlist.pipe';
import { PowerPipe } from './power.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    GendercheckPipe,
    ReversePipe,
    GenderlistPipe,
    PowerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
