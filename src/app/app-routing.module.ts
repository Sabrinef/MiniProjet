import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DetailFoodComponent } from './detail-food/detail-food.component';
import { GalerieComponent } from './galerie/galerie.component';
import { HomeComponent } from './home/home.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PanierComponent } from './panier/panier.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { ListChefsComponent } from './list-chefs/list-chefs.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:'',redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'contact_us', component: ContactComponent},
  {path:'food_galerie', component: GalerieComponent},
  {path:'food_galerie/food/:id', component: DetailFoodComponent},
  {path:'menu', component: MenuComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  //{path:'food_galerie/food/:id/reservate', component: ReservationComponent},
  {path:'reservate', component: ReservationComponent},
  {path:'your_reservations', component: ListReservationComponent},
  {path:'your_reservations/updatereservation/:id', component: UpdateReservationComponent},
  {path:'your_panier', component: PanierComponent},
  {path:'our_chefs', component: ListChefsComponent},
  {path:'your_profile', component: ProfileComponent},
  {path:'your_profile/update_profile/:id', component: UpdateUserComponent},
  {path:'your_order', component: OrderComponent},
  {path: '**',component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
