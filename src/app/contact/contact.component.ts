import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-polylinedecorator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  mymap: any;
  constructor() { }

  ngOnInit(): void {
     //affichage map
     this.mymap = L.map('mapid').setView([46.879966, 5.2], 6);
     L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', { // tile.openstreetmap.org
       attribution: 'Frugal Map'
     }).addTo(this.mymap);

     L.marker([36.8, 10.6]).addTo(this.mymap)
    .bindPopup('OUR RESTAURANRT<br>REDBOWL')
    .openPopup();
     L.marker([36.4, 10.1]).addTo(this.mymap)
    .bindPopup('OUR RESTAURANRT<br> REDBOWL')
    .openPopup();
    L.marker([35.5, 10.7]).addTo(this.mymap)
    .bindPopup('OUR RESTAURANRT<br> REDBOWL')
    .openPopup();


  }

}
