import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recommend } from '../interfaces/recommend.interface';


@Injectable({
  providedIn: 'root'
})

export class RecommendServiceService {

  url_recommend = "http://localhost:4400/recommendApi";
  showProductURL = "http://localhost:4400/showProduct";

  constructor(private http:HttpClient) { }

  getReccomendFromServer() {
    return this.http.get<Recommend[]>(this.url_recommend);
  }

  showProduct() {
    return this.http.get<Recommend[]>(this.showProductURL);
  }

}
