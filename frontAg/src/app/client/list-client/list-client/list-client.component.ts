import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/model/client';
import { ClientService } from 'src/service/client/client.service';
import { MatCard } from '@angular/material/card';
import { AddClientComponent } from '../../add-client/add-client/add-client.component';
import { EditClientComponent } from '../../edit-client/edit-client/edit-client.component';
import { DeleteClientComponent } from '../../delete-client/delete-client/delete-client.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent {
  

  @Input() headerTitle: string = 'Client';
  @Input() addButtonLabel: string = 'Default Button Label';
  clients: Client[] = [];

  displayedColumns: string[] = [
    'Nom',
    'Prénom',
    'Email',
    'Télephone',
    'Action',
  ];
  nb: number | any;
  pageNumber: number = 0;
  sizePage: number = 5;
  nom: string = '';
  prenom: string = '';
  email: string = '';
  tel: string = '';
clientControl: any;
selectedClient: Client | null = null;

  constructor(  private clientService: ClientService,
    public dialog: MatDialog){}
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    
    ngOnInit() {
      this.refresh();
      this.fetchClient();
    }
    refresh(): void {
      this.fetchClient();
    }

  defaultnom: string = '';
  defaultprenom: string = '';
  defaultemail: string = '';
  defaulttel: string = '';

  resetFields() {
    // Réinitialiser les valeurs des champs aux valeurs par défaut
    this.nom = this.defaultnom;
    this.prenom = this.defaultprenom;
    this.email = this.defaultemail;
    this.tel = this.defaulttel;
    this.clientControl=undefined
    this.fetchClient();
  }
  displayClient(client: any): string {
    return client ? client.nom + ' ' + client.prenom : '';
  }
  fetchClient() {
    this.clientService.getAllClient(this.pageNumber, this.sizePage)
      .subscribe(
        (data: any) => {
          this.clients = data.content;
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
      this.fetchClient();
    }

    openEditDialog(client: Client): void {
      this.selectedClient = client;
      console.log("call from list client sel client tel: "+client.tel);
      const dialogRef = this.dialog.open(EditClientComponent, {
        maxWidth: '150%',
        height: '400px',
        data: client,
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.fetchClient();
        }
      });
    }

    openDeleteDialog(client: Client): void {
      const dialogRef = this.dialog.open(DeleteClientComponent, {
        data: client,
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log("Supprimer client fct")
          this.fetchClient();
        }
      });
    }
  }
