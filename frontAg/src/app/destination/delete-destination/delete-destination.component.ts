import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Destination } from 'src/model/destination';
import { DestinationService } from 'src/service/destination/destination.service';

@Component({
  selector: 'app-delete-destination',
  templateUrl: './delete-destination.component.html',
  styleUrls: ['./delete-destination.component.css']
})
export class DeleteDestinationComponent {
  constructor(
    
    public dialogRef: MatDialogRef<DeleteDestinationComponent>,
    private destinationService: DestinationService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public destination: Destination
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(false);
  }
  onDeleteClick(): void {
    // console.log("Componenent delete");
    // console.log("id: "+this.client.idCient);
    this.destinationService.deleteDestination(this.destination.idDestination).subscribe(
      (response) => {
        // console.log('Client deleted successfully:', response);
        this.dialogRef.close(true);
        this.showSnackBar('Destination deleted successfully');
       
      },
      (error) => {
        console.error('Error deleting destination:', error);
        this.dialogRef.close(false);
      }
    );
  }
  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, 
      verticalPosition: 'top', 
      horizontalPosition: 'center', 
    });
  }
}
