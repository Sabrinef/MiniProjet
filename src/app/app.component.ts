import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { isNull } from 'util';
import { PanierService } from './services/panier.service';
import { Panier } from './models/panier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'MiniProjet';

test = false;
email:string;
listPanier:Panier[];
nbre:number;
  constructor(private service: ActivatedRoute,private loginservice: LoginService, private router: Router, private servicepanier: PanierService) { }
  ngOnInit(): void {
    
    if (!isNull(localStorage.getItem('user'))){
      this.test=true;
      console.log("connecter");
    } 
   // this.nbre=0;
    this.servicepanier.getP().subscribe(data =>
      {
        this.listPanier = data;
        for (let i of data){
        if ((i.user.email === this.loginservice.getUser().email) && (i.user.password === this.loginservice.getUser().password)){  
          this.nbre=i.food.length;
          console.log(this.nbre);
        }
        }
        
       
      } );
  }

  logout() {
    this.loginservice.logout();
    this.test=false;
    console.log("N'est pas connecter");
  }
}
