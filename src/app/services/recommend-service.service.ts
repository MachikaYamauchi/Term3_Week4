import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recommend } from '../interfaces/recommend.interface';

@Injectable({
  providedIn: 'root'
})

export class RecommendServiceService {

  url_recommend = "http://localhost:4400/recommendApi";
  constructor(private http:HttpClient) { }

  getReccomendFromServer() {
    return this.http.get<Recommend[]>(this.url_recommend);
  }
}
