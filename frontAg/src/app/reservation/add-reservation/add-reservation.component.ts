import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Client } from 'src/model/client';
import { Destination } from 'src/model/destination';
import { Facture } from 'src/model/facture';
import { Hotel } from 'src/model/hotel';
import { Reservation } from 'src/model/reservation';
import { Transport } from 'src/model/transport';
import { ClientService } from 'src/service/client/client.service';
import { DestinationService } from 'src/service/destination/destination.service';
import { FactureService } from 'src/service/facture/facture.service';
import { HotelService } from 'src/service/hotel/hotel.service';
import { ReservationService } from 'src/service/reservation/reservation.service';
import { TransportService } from 'src/service/transport/transport.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {

  selectedClient: string | any;
  selectedHotel: string | any;
  selectedTransport: string | any;
  selectedDestination: string | any;
  selectedStatus: string | any;
  clients: Client | any;
  hotels: Hotel | any;
  transports: Transport | any;
  destinations: Destination | any;
  selectedDateDB: Date | undefined | null ;
  selectedDateDF: Date | undefined | null ;

  constructor(private dialog: MatDialog, 
    private transportService: TransportService, 
    private destinationService: DestinationService, 
    private hotelService: HotelService, 
    private clientService: ClientService, 
    private reservationService: ReservationService, 
    private factureService : FactureService,
    public dialogRef: MatDialogRef<AddReservationComponent>,
    private snackBar: MatSnackBar) { }

    reservations: Reservation ={
      idReservation: 0,
      date_debut: '',
      date_fin: '',
      status: '',
      transports: {} as Transport,
      hotel: {} as Hotel,
      client: {} as Client,
      destination: {} as Destination
    }

    facture: Facture ={
      idFacture: 0,
      nom: '',
      total: 0,
      reservation: {} as Reservation
    }
    ngOnInit(): void {
      this.fetchClient();
      this.fetchDestination()
      this.fetchTransport();
      this.fetchHotel();
    }
    ngAfterViewInit() {
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
      this.hotelService.getAllHotelList().subscribe(
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

    // addNewReservation(reservationData: Reservation) {
    //   const clientId = this.getClientIdByName(this.selectedClient);
    //   const hotelId = this.getHotelIdByName(this.selectedHotel);
    //   const transportId = this.getTransportIdByName(this.selectedTransport);
    //   const destinationId = this.getDestinationIdByName(this.selectedDestination);

      
    
    //   // Ensure reservationData.client and reservationData.event are initialized
    //   reservationData.client = reservationData.client || {} as Client;
    //   reservationData.hotel = reservationData.hotel || {} as Hotel;
    //   reservationData.transports = reservationData.transports || {} as Transport;
    //   reservationData.destination = reservationData.destination || {} as Destination;

  
    //   reservationData.client.idCient = clientId;
    //   reservationData.transports.idTransport = transportId;
    //   reservationData.hotel.idHotel = hotelId;
    //   reservationData.destination.idDestination = destinationId;  
    //   reservationData.date_debut = this.selectedDateDB?.toISOString().split('T')[0] ?? ''; 
    //   reservationData.date_fin = this.selectedDateDF?.toISOString().split('T')[0] ?? ''; 


    //   console.log("hote: ", reservationData.hotel.nom);
    //   console.log("tran: ", reservationData.transports.nom);
    //   console.log("client: ", reservationData.client.nom);
    //   console.log("des: ",reservationData.destination.ville);
    //   console.log("db: ",reservationData.date_debut);
    //   console.log("df: ",reservationData.date_fin);
    //   this.reservationService.addReservation(reservationData).subscribe(
    //     (response) => {
    //       console.log('New reservation added successfully:', response);
    //       this.showSnackBar('Reservation Ajoutée');
    //       this.dialogRef.close();
    //     },
    //     (error) => {
    //       console.error('Error adding new reservation:', error);
    //       this.showSnackBar('Erreur Reservation ');
    //       this.dialogRef.close();
    //     }
    //   );
    // }

    addNewReservation(reservationData: Reservation) {

      console.log("selectedClient variable: ", this.selectedClient);
      const clientId = this.getClientIdByName(this.selectedClient);
      const hotelId = this.getHotelIdByName(this.selectedHotel);
      const transportId = this.getTransportIdByName(this.selectedTransport);
      const destinationId = this.getDestinationIdByName(this.selectedDestination);
  
      // Ensure reservationData.client, reservationData.hotel, reservationData.transports,
      // and reservationData.destination are initialized
      reservationData.client = reservationData.client || {} as Client;
      reservationData.hotel = reservationData.hotel || {} as Hotel;
      reservationData.transports = reservationData.transports || {} as Transport;
      reservationData.destination = reservationData.destination || {} as Destination;
  
      // Set the properties for the initialized objects
      // reservationData.client.idCient = clientId;
      reservationData.client = this.selectedClient;
  
      // reservationData.hotel.idHotel = hotelId;
      reservationData.hotel = this.selectedHotel;
  
      // reservationData.transports.idTransport = transportId;
      reservationData.transports = this.selectedTransport;
  
      // reservationData.destination.idDestination = destinationId;
      reservationData.destination = this.selectedDestination;
  
      reservationData.date_debut = this.selectedDateDB?.toISOString().split('T')[0] ?? '';
      reservationData.date_fin = this.selectedDateDF?.toISOString().split('T')[0] ?? '';
      reservationData.status = this.selectedStatus;

      console.log("hote: ", reservationData.hotel.prix);
      console.log("tran: ", reservationData.transports.nom);
      console.log("client: ", reservationData.client.idCient);
      console.log("des: ",reservationData.destination.ville);
      console.log("status: ",reservationData.status);
  
      this.reservations= reservationData;
      console.log("reservations: ",this.reservations);
      console.log("selected trans: ",this.selectedTransport);


      this.reservationService.addReservation(reservationData).subscribe(
          (response) => {
              console.log('New reservation added successfully:', response);
              this.showSnackBar('Reservation Ajoutée');
              this.dialogRef.close();
          },
          (error) => {
              console.error('Error adding new reservation:', error);
              this.showSnackBar('Erreur Reservation ');
              this.dialogRef.close();
          }
      );

      // this.facture.reservation.hotel.idHotel=hotelId;
      // this.facture.reservation.client.idCient=clientId;

  }

  // addNewFacture(factureData: Facture)
  // {
  //   //this.facture.reservation =this.reservations;

  //   factureData.reservation=this.reservations
  //   this.factureService.addFacture(factureData).subscribe(
  //     (response) => {
  //         console.log('New facture added successfully:', response);
  //         //this.showSnackBar('Reservation Ajoutée');
  //         //this.dialogRef.close();
  //     },
  //     (error) => {
  //         console.error('Error adding new facture:', error);
  //         this.showSnackBar('Erreur facture ');
  //         this.dialogRef.close();
  //     }
  // );

  // }
  

    getClientIdByName(clientName: string): number {
      console.log("getClientIdByName call")
      const selectedClient = this.clients.find((clt: { nom: string; }) => clt.nom === clientName);
      console.log("selectedClient inside fct: ", selectedClient, " clientName param: ", clientName)
      return selectedClient ? selectedClient.idCient : -1;
    }

    getDestinationIdByName(destinationName: string): number {
      const selectedDestination = this.destinations.find((dst: { ville: string; }) => dst.ville === destinationName);
      return selectedDestination ? selectedDestination.idDestination : -1;
    }

    getHotelIdByName(hotelName: string): number {
      const selectedHotel = this.hotels.find((htl: { nom: string; }) => htl.nom === hotelName);
      return selectedHotel ? selectedHotel.idHotel : -1;
    }

    getTransportIdByName(transportName: string): number {
      const selectedTransport = this.transports.find((trp: { nom: string; }) => trp.nom === transportName);
      return selectedTransport ? selectedTransport.idTransport : -1;
    }

    showSnackBar(message: string): void {
      this.snackBar.open(message, 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    }


    isDateValid: boolean = true; // Variable to track whether the date is valid

    // Function to check if Date fin is greater than Date début
    checkDateValidity(): void {
      if (this.selectedDateDF && this.selectedDateDB) {
        this.isDateValid = this.selectedDateDF > this.selectedDateDB;
      } else {
        this.isDateValid = true; // If any date is not selected, consider it valid
      }
    }


    onDateChangeDB(event: MatDatepickerInputEvent<Date>): void {
      this.selectedDateDB = event.value;
      console.log('Selected Date db:', this.selectedDateDB);
      // You can perform additional actions with the selected date if needed
    }

    onDateChangeDF(event: MatDatepickerInputEvent<Date>): void {
      this.selectedDateDF = event.value;
      console.log('Selected Date df:', this.selectedDateDF);
      this.checkDateValidity();
      // You can perform additional actions with the selected date if needed
    }

    showError(): void {
      this.snackBar.open('La date de fin doit être supérieure à la date de début.', 'Fermer', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    }
    doNothing() {
      // You can leave this function empty or add any specific actions you want to perform when the button is clicked without calling addNewReservation.
  }
  }

