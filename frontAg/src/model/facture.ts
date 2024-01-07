import { Reservation } from "./reservation";

export interface Facture {
      idFacture: number;

      nom: String;

      total: number;

      reservation: Reservation;
}