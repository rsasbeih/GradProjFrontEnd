import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { AccountComponent } from './account/account.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'profile',component: ProfileComponent},
  {path: 'gift-cards',component: GiftCardsComponent},
  {path: 'account',component: AccountComponent},
  {path: 'reservations',component: ReservationsComponent},
  {path: 'contact_us',component: ContactUsComponent},
  {path: 'about_us',component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
