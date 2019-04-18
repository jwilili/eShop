import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Shop} from '../models/shop';
import {OperationResult} from '../models/operation-result';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient) {
  }

  getNearbyShops() {
    return this.http.get<Shop[]>(this.baseUrl + `nearby_shops`);
  }

  getPreferredShops() {
    return this.http.get<Shop[]>(this.baseUrl + 'preferred_shops');
  }

  likeShop(id) {
    console.log(id)
    return this.http.get<OperationResult>(this.baseUrl + 'like_shop/' + id );
  }

  removeLikedShop(id) {
    return this.http.get<OperationResult>(this.baseUrl + 'remove_liked_shop/' + id );
  }
}
