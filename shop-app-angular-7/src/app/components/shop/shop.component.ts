import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Shop} from '../../models/shop';
import {ShopService} from '../../services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @Input() shop: Shop;

  constructor(private shopService: ShopService, private elRef: ElementRef) {
  }

  ngOnInit() {
  }

  removeLikedShop() {
    this.shopService.removeLikedShop(this.shop.id).subscribe(data => {
      if (data.result) {
        this.elRef.nativeElement.remove();
      }
    });
  }

  likeShop() {
    this.shopService.likeShop(this.shop.id).subscribe(data => {
      if (data.result) {
        this.elRef.nativeElement.remove();
      }
    });
  }
}
