import { Component, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingList } from './bookingList.model';
import { Booking } from './booking.model';
import { Room } from './room.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  selectedOption : string;
  title = "prenotazioni";
  bookings = BookingList;
  selectedRoom: Booking = BookingList[0];
  roomList: Room[];  //Questo vettore va passato al componente sonList
  obsRoom : Observable<Room[]>;

  constructor(public  http: HttpClient) {

  }

  ngOnInit() {
    this.roomList = new Array <Room>();
    this.obsRoom = this.http.get<Room[]>("https://my-json-server.typicode.com/malizia-g/hotel/songlist");
    this.obsRoom.subscribe(this.getRoom);
  }

  getRoom = (data : Room[]) =>
  {
    this.roomList = data;
  }

  /*Il metodo on CLick controlla cerca l'album selezionato in base al titolo e aggiunge la canzone
  Selezionata alla songList*/
  onClick(f: HTMLInputElement  ,t : HTMLInputElement, n :HTMLInputElement,  s :HTMLInputElement ) : boolean
  {
    this.selectedRoom = BookingList.find((booking: Booking) => booking.name == this.selectedOption);
    this.roomList.push(new Room(this.selectedRoom, new Date(f.value),new Date(t.value), String(n.value), s.value));
    //Dopo aver aggiunto la canzone azzero tutti i campi
    f.value ="";
    t.value ="";
    n.value="";
    s.value="";
    this.selectedOption = undefined;
    return false;
  }


  onChange()
  {
    this.selectedRoom = BookingList.find((booking: Booking) => booking.name == this.selectedOption);
  }
}


