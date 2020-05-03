import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WatchlistComponent } from './watchlist/watchlist.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'profile',component: ProfileComponent},
  {path: 'account',component: AccountComponent},
  {path: 'reservations',component: ReservationsComponent},
  {path: 'contact_us',component: ContactUsComponent},
  {path: 'about_us',component: AboutUsComponent},
  {path: 'watchlist',component: WatchlistComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
