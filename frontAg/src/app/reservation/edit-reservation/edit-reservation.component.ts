import { Component, Inject } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from 'src/model/client';
import { Destination } from 'src/model/destination';
import { Hotel } from 'src/model/hotel';
import { Reservation } from 'src/model/reservation';
import { Transport } from 'src/model/transport';
import { ClientService } from 'src/service/client/client.service';
import { DestinationService } from 'src/service/destination/destination.service';
import { HotelService } from 'src/service/hotel/hotel.service';
import { ReservationService } from 'src/service/reservation/reservation.service';
import { TransportService } from 'src/service/transport/transport.service';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent {
  selectedClient: Client | any;
  selectedHotel: Hotel | any;
  selectedTransport: Transport | any;
  selectedDestination: Destination | any;
  selectedStatus: string | any;

  reservation: Reservation; 

  clients: Client[] = [];

  hotels: Hotel [] = [];;
  transports: Transport[] = [];;
  destinations: Destination [] = [];;
  selectedDateDB: Date | undefined | null ;
  selectedDateDF: Date | undefined | null ;

constructor(
  //private dialog: MatDialog, 
  private reservationService: ReservationService,
     public dialogRef: MatDialogRef<EditReservationComponent>,
    private snackBar: MatSnackBar,
    private clientService: ClientService,
    private hotelsService: HotelService,
    private transportService: TransportService,
    private destinationService: DestinationService,
    @Inject(MAT_DIALOG_DATA) public data: Reservation
)
{
  console.log("constructeur date db: ", data.date_debut)
  this.reservation=data;

  this.fetchClient();
  this.fetchDestination()
  this.fetchTransport();
  this.fetchHotel();
}

fetchClient() {
  this.clientService.getAllClientList().subscribe(
    (data: Client[]) => {
      if (data) {
        this.clients = data;
        console.log("Clients:", this.clients);
      } else {
        console.error('Invalid data structure for clients:', data);
      }
    },
    (error) => {
      console.error('Error fetching clients:', error);
    }
  );
}

fetchDestination() {
  this.destinationService.getAllDestination().subscribe(
    (data: Destination[]) => {
      if (data) {
        this.destinations = data;
        console.log("Dest:", this.destinations);
      } else {
        console.error('Invalid data structure for dest:', data);
      }
    },
    (error) => {
      console.error('Error fetching dests:', error);
    }
  );
}

fetchTransport() {
  this.transportService.getAllTransport().subscribe(
    (data: Transport[]) => {
      if (data) {
        this.transports = data;
        console.log("trans:", this.transports);
      } else {
        console.error('Invalid data structure for Transport:', data);
      }
    },
    (error) => {
      console.error('Error fetching Transport:', error);
    }
  );
}
fetchHotel() {
  this.hotelsService.getAllHotelList().subscribe(
    (data: Hotel[]) => {
      if (data) {
        this.hotels = data;
        console.log("hotels:", this.hotels);
      } else {
        console.error('Invalid data structure for hotels:', data);
      }
    },
    (error) => {
      console.error('Error fetching hotels:', error);
    }
  );
}
showSnackBar(message: string): void {
  this.snackBar.open(message, 'Close', {
    duration: 3000,
    verticalPosition: 'top',
    horizontalPosition: 'center',
  });
}

updateReservation(formData: any): void {

  
console.log("formData.selectedClient:", formData.selectedClient);
console.log("formData.selectedHotel: ", formData.selectedHotel);
console.log("formData.dateDB: ", formData.selectedDateDB);
// Assign the selected client and event IDs to the reservation object
this.reservation.client = this.getClientIdByName(formData.selectedClient)  ;
this.reservation.destination = this.getDestinationIdByName(formData.selectedDestination)  ;
this.reservation.transports = this.getTransportIdByName(formData.selectedTransport)  ;
this.reservation.hotel = this.getHotelIdByName(formData.selectedHotel)  ;
this.reservation.date_debut= formData.selectedDateDB; // Format as "YYYY-MM-DD"
// this.reservation.date_fin= this.selectedDateDF?.toISOString().split('T')[0] ?? ''; // Format as "YYYY-MM-DD"
this.reservation.date_fin= formData.selectedDateDF; // Format as "YYYY-MM-DD"
this.reservation.status= formData.selectedStatus
console.log("reservation.client");
console.log(this.reservation.client.idCient);
console.log("reservation.tran");
console.log(this.reservation.transports.idTransport);
console.log("reservation.htl");
console.log(this.reservation.hotel.idHotel);
console.log("reservation.dest");
console.log(this.reservation.destination.idDestination);
console.log("reservation.date_db");
console.log(this.reservation.date_debut);
console.log("reservation.date_df");
console.log(this.reservation.date_fin);
  this.reservationService.updateReservation(this.reservation).subscribe(
    (response) => {
      
      console.log('reservation updated successfully:', response);
      this.dialogRef.close(this.reservation);
      this.showSnackBar('reservation updated successfully');
    },
    (error) => {
      console.error('Error updating reservation:', error);
    }
  );
}


getClientIdByName(clientName: string): any {
  const idClt = this.clients.find(clt => clt.nom === clientName);
  console.log("getClientIdByName inside fct: ", idClt)
  return idClt;
}

getDestinationIdByName(destinationName: string): any {
  const idDst = this.destinations.find(dst => dst.ville === destinationName);
  console.log("getDestinationIdByName : ", idDst);
  return idDst;
}

getHotelIdByName(hotelName: string): any {
  const idHtl = this.hotels.find(htl => htl.nom === hotelName);
  console.log("getHotelIdByName : ", idHtl);
  return idHtl;
}

getTransportIdByName(transportName: string): any {
  const idTrp = this.transports.find(trp => trp.nom === transportName);
  return idTrp;
}

onDateChangeDB(event: MatDatepickerInputEvent<Date>): void {
  this.selectedDateDB = event.value;
  console.log('Selected Date DB:', this.selectedDateDB);
}

onDateChangeDF(event: MatDatepickerInputEvent<Date>): void {
  this.selectedDateDF = event.value;
  console.log('Selected Date DF:', this.selectedDateDF);
}
}
