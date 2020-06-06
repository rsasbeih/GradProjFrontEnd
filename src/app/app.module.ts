import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AccountComponent } from './account/account.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseComponent } from './browse/browse.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VenueInfoComponent } from './venue-info/venue-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReserveVenueComponent } from './reserve-venue/reserve-venue.component';
import { HttpClientModule } from '@angular/common/http';
import { BOProfileComponent } from './boprofile/boprofile.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    BusinessProfileComponent,
    ReservationsComponent,
    AccountComponent,
    AboutUsComponent,
    ContactUsComponent,
    WatchlistComponent,
    BrowseComponent,
    VenueInfoComponent,
    ReserveVenueComponent,
    BOProfileComponent,
    LoginDialogComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
