import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { GalerieComponent } from './galerie/galerie.component';
import { FoodComponent } from './food/food.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodService } from './services/food.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailFoodComponent } from './detail-food/detail-food.component';
import { MenuComponent } from './menu/menu.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { ReservationService } from './services/reservation.service';
import { AuthGuard } from './service/auth/auth.guard';
import { ReservationComponent } from './reservation/reservation.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { PanierComponent } from './panier/panier.component';
import { PanierService } from './services/panier.service';
import { LikeService } from './services/like.service';
import { CommentService } from './services/comment.service';
import { CommentComponent } from './comment/comment.component';
import { ChefComponent } from './chef/chef.component';
import { ListChefsComponent } from './list-chefs/list-chefs.component';
import { ChefService } from './services/chef.service';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { OrderService } from './services/order.service';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NotFoundPageComponent,
    HomeComponent,
    GalerieComponent,
    FoodComponent,
    DetailFoodComponent,
    MenuComponent,
    FoodMenuComponent,
    RegisterComponent,
    LoginComponent,
    ReservationComponent,
    ListReservationComponent,
    UpdateReservationComponent,
    PanierComponent,
    CommentComponent,
    ChefComponent,
    ListChefsComponent,
    ProfileComponent,
    UpdateUserComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
     // timeOut: 1000,
      progressBar: true,
      progressAnimation: "increasing",
      preventDuplicates: true,
      
    })
  ],
  providers: [FoodService ,UserService, LoginService, AuthGuard, ReservationService, PanierService, 
    LikeService,CommentService,ChefService,OrderService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
