import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { BrowseComponent } from './browse/browse.component';
import { VenueInfoComponent } from './venue-info/venue-info.component';
import { ReserveVenueComponent } from './reserve-venue/reserve-venue.component';
import { BOProfileComponent } from './boprofile/boprofile.component';
import {ThankYouComponent} from './thank-you/thank-you.component';
import { ManageVenuesComponent } from './manage-venues/manage-venues.component';
import { AddVenueComponent } from './add-venue/add-venue.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'profile',component: ProfileComponent},
  {path: 'account',component: AccountComponent},
  {path: 'reservations',component: ReservationsComponent},
  {path: 'contact_us',component: ContactUsComponent},
  {path: 'about_us',component: AboutUsComponent},
  {path: 'watchlist',component: WatchlistComponent},
  {path: 'browse',component: BrowseComponent},
  {path: 'browse/:type',component: BrowseComponent},
  // {path: 'browse/:location',component: BrowseComponent},
  // {path: 'browse/:type/:location',component: BrowseComponent},
  {path: 'venue_info',component: VenueInfoComponent},
  {path: 'venue_info/:id',component: VenueInfoComponent},
  {path: 'reserve_venue',component: ReserveVenueComponent},
  {path: 'boprofile',component: BOProfileComponent},
  {path: 'thank_you',component: ThankYouComponent},
  {path: 'manage_venues',component: ManageVenuesComponent},
  {path: 'add_venue',component: AddVenueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
