import {Component, OnInit} from '@angular/core';
import {ShopService} from '../../services/shop.service';

@Component({
  selector: 'app-preferred-shops',
  templateUrl: './preferred-shops.component.html',
  styleUrls: ['./preferred-shops.component.css']
})
export class PreferredShopsComponent implements OnInit {

  shops = [];

  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
    this.shopService.getPreferredShops().subscribe(data => {
      this.shops = data;
    });
  }

}
