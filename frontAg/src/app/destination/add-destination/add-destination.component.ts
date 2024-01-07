import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Destination } from 'src/model/destination';
import { DestinationService } from 'src/service/destination/destination.service';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css']
})
export class AddDestinationComponent {
  constructor(private dialog: MatDialog, private destinationService: DestinationService,private snackBar: MatSnackBar
    ,public dialogRef: MatDialogRef<AddDestinationComponent>) { }

  destination : Destination = {
    idDestination: 0,
    pays: '',
    ville: ''
  }
  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
  addNewDestination(destinationData: Destination) {
    this.destinationService.addDestination(destinationData).subscribe(
      (response) => {
      
        console.log('New Destination added successfully:', response);
        this.showSnackBar('Destination Ajoutée');
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error adding new destination:', error);
        this.dialogRef.close();
      }
    );
  }

}
