import { Client } from "./client";
import { Destination } from "./destination";
import { Hotel } from "./hotel";
import { Transport } from "./transport";

export interface Reservation {
    idReservation: number;
   
    date_debut: String;
    date_fin: String;

    status: String;

    transports: Transport;


    hotel: Hotel;

    client: Client;

    destination: Destination;
}