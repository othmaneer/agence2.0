import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Destination } from 'src/model/destination';
import { DestinationService } from 'src/service/destination/destination.service';

@Component({
  selector: 'app-edit-destination',
  templateUrl: './edit-destination.component.html',
  styleUrls: ['./edit-destination.component.css']
})
export class EditDestinationComponent {
  constructor(private dialog: MatDialog, private destinationService: DestinationService, public dialogRef: MatDialogRef<EditDestinationComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Destination) {
      this.destination=data;
     }

     destination: Destination | any;

     updateTransport(formData: any): void {
 
      this.destination.pays = formData.pays;
      this.destination.ville = formData.ville;

      console.log("Destination update comp fct")
      this.destinationService.updateDestination(this.destination).subscribe(
        (response) => {
          console.log('After response dest updated successfully:', response);
          this.dialogRef.close(this.destination);
          this.showSnackBar('Destination mis à jour');
        },
        (error) => {
          console.error('Error updating destination:', error);
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
}
