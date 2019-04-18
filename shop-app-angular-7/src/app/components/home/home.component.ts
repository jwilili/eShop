import {Component, OnInit} from '@angular/core';
import {Shop} from '../../models/shop';
import {ShopService} from '../../services/shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shops = [];

  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
    this.shopService.getNearbyShops().subscribe(data => {
      this.shops = data;
    });
  }

}
