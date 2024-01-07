import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Destination } from 'src/model/destination';
import { DestinationService } from 'src/service/destination/destination.service';
import { EditDestinationComponent } from '../edit-destination/edit-destination.component';
import { DeleteDestinationComponent } from '../delete-destination/delete-destination.component';

@Component({
  selector: 'app-list-destination',
  templateUrl: './list-destination.component.html',
  styleUrls: ['./list-destination.component.css']
})
export class ListDestinationComponent {
  destinations: Destination[] = [];

  displayedColumns: string[] = [
     'Pays',
     'Ville',
     'Action',
   ];
   nb: number | any;
   pageNumber: number = 0;
   sizePage: number = 5;
   nom: string = '';
   ville: string = '';
   destinationControl: any;
 selectedDestination: Destination | null = null;
 
 constructor(  private destinationService: DestinationService,
   public dialog: MatDialog){}
   @ViewChild(MatPaginator) paginator!: MatPaginator;
 
   ngOnInit() {
     
     this.fetchDestination();
   }
 
 
   fetchDestination() {
     this.destinationService.getAllDestinationPage(this.pageNumber, this.sizePage)
       .subscribe(
         (data: any) => {
           this.destinations = data.content;
           this.nb = data.totalElements;
         },
         (error) => {
           //this.showSpinner=true
           console.error('Error fetching client:', error);
         }
       );
   }
   onPageChange(event: PageEvent) {
     
       this.sizePage = event.pageSize;
       this.pageNumber = event.pageIndex;
       this.fetchDestination();
     }
 
     openEditDialog(destination: Destination): void {
       this.selectedDestination = destination;
       const dialogRef = this.dialog.open(EditDestinationComponent, {
         maxWidth: '150%',
         height: '400px',
         data: destination,
       });
       dialogRef.afterClosed().subscribe((result) => {
         if (result) {
           this.fetchDestination();
         }
       });
     }
 
     openDeleteDialog(destination: Destination): void {
       const dialogRef = this.dialog.open(DeleteDestinationComponent, {
         data: destination,
       });
   
       dialogRef.afterClosed().subscribe((result) => {
         if (result) {
           console.log("Supprimer dest fct")
           this.fetchDestination();
         }
       });
     }
 
}
