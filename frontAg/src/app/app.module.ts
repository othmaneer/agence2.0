import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddClientComponent } from './client/add-client/add-client/add-client.component';
import { EditClientComponent } from './client/edit-client/edit-client/edit-client.component';
import { ListClientComponent } from './client/list-client/list-client/list-client.component';
import { DeleteClientComponent } from './client/delete-client/delete-client/delete-client.component';



import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common'; 
import { MatChipsModule } from '@angular/material/chips'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main/main.component';
import { AddHotelComponent } from './hotel/add-hotel/add-hotel.component';
import { EditHotelComponent } from './hotel/edit-hotel/edit-hotel.component';
import { DeleteHotelComponent } from './hotel/delete-hotel/delete-hotel.component';
import { AddReservationComponent } from './reservation/add-reservation/add-reservation.component';
import { EditReservationComponent } from './reservation/edit-reservation/edit-reservation.component';
import { DeleteReservationComponent } from './reservation/delete-reservation/delete-reservation.component';
import { AddTransportComponent } from './transport/add-transport/add-transport.component';
import { EditTransportComponent } from './transport/edit-transport/edit-transport.component';
import { DeleteTransportComponent } from './transport/delete-transport/delete-transport.component';
import { EditFactureComponent } from './facture/edit-facture/edit-facture.component';
import { DeleteFactureComponent } from './facture/delete-facture/delete-facture.component';
import { AddDestinationComponent } from './destination/add-destination/add-destination.component';
import { EditDestinationComponent } from './destination/edit-destination/edit-destination.component';
import { DeleteDestinationComponent } from './destination/delete-destination/delete-destination.component';
import { ListDestinationComponent } from './destination/list-destination/list-destination.component';
import { ListFactureComponent } from './facture/list-facture/list-facture.component';
import { ListReservationComponent } from './reservation/list-reservation/list-reservation.component';
import { ListTransportComponent } from './transport/list-transport/list-transport.component';
import { ListHotelComponent } from './hotel/list-hotel/list-hotel.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './charts/reporting/reporting.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ReportingComponent } from './reporting/reporting/reporting.component';


@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    EditClientComponent,
    ListClientComponent,
    DeleteClientComponent,
    MainComponent,
    AddHotelComponent,
    EditHotelComponent,
    DeleteHotelComponent,
    AddReservationComponent,
    EditReservationComponent,
    DeleteReservationComponent,
    AddTransportComponent,
    EditTransportComponent,
    DeleteTransportComponent,
    EditFactureComponent,
    DeleteFactureComponent,
    AddDestinationComponent,
    EditDestinationComponent,
    DeleteDestinationComponent,
    ListDestinationComponent,
    ListFactureComponent,
    ListReservationComponent,
    ListTransportComponent,
    ListHotelComponent,
    LoginComponent,
    ChartComponent,
    ReportingComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    MatTableModule,
   // ReactiveFormsModule,
   // FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    HttpClientModule,
    MatCheckboxModule,
    MatChipsModule,
    CommonModule,
    MatNativeDateModule,MatDatepickerModule,
    MatToolbarModule,
    MatProgressBarModule
    ,
    MatAutocompleteModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
