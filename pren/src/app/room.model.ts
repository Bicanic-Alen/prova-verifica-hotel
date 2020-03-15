import { Booking } from './booking.model';


export class Room
{
  constructor(
    public penotazione : Booking,
    public from: Date,
    public to : Date,
    public name : String,
    public surname : String,
  ) {}

}
