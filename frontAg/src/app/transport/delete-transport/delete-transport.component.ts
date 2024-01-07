import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Transport } from 'src/model/transport';
import { TransportService } from 'src/service/transport/transport.service';

@Component({
  selector: 'app-delete-transport',
  templateUrl: './delete-transport.component.html',
  styleUrls: ['./delete-transport.component.css']
})
export class DeleteTransportComponent {
  constructor(
    
    public dialogRef: MatDialogRef<DeleteTransportComponent>,
    private transportService: TransportService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public transport: Transport
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(false);
  }
  onDeleteClick(): void {
    // console.log("Componenent delete");
    // console.log("id: "+this.client.idCient);
    this.transportService.deleteTransport(this.transport.idTransport).subscribe(
      (response) => {
        // console.log('Client deleted successfully:', response);
        this.dialogRef.close(true);
        this.showSnackBar('Transport deleted successfully');
       
      },
      (error) => {
        console.error('Error deleting transport:', error);
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
