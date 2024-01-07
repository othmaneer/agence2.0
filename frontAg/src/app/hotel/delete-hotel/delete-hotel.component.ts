import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hotel } from 'src/model/hotel';
import { HotelService } from 'src/service/hotel/hotel.service';

@Component({
  selector: 'app-delete-hotel',
  templateUrl: './delete-hotel.component.html',
  styleUrls: ['./delete-hotel.component.css']
})
export class DeleteHotelComponent {
  constructor(
    
    public dialogRef: MatDialogRef<DeleteHotelComponent>,
    private hotelService: HotelService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public hotel: Hotel
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(false);
  }
  onDeleteClick(): void {
    // console.log("Componenent delete");
    // console.log("id: "+this.client.idCient);
    this.hotelService.deleteHotel(this.hotel.idHotel).subscribe(
      (response) => {
        // console.log('Client deleted successfully:', response);
        this.dialogRef.close(true);
        this.showSnackBar('Hotel deleted successfully');
       
      },
      (error) => {
        console.error('Error deleting hotel:', error);
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
