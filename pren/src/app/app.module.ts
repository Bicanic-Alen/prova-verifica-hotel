import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BookingList } from './bookingList.model';
import { Booking } from './booking.model';
import { Room } from './room.model';


@NgModule({
  declarations: [
    AppComponent,
    Booking,
    BookingList,
    Room

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
