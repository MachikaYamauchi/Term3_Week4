import { Component, OnInit } from '@angular/core';
import { Recommend } from '../interfaces/recommend.interface';
import { RecommendServiceService } from '../services/recommend-service.service';

@Component({
  selector: 'recommends',
  templateUrl: './recommends.component.html',
  styleUrls: ['./recommends.component.scss']
})
export class RecommendsComponent implements OnInit {

  recommendJSON:Recommend[] =[];

  isLessStock(stockNumber:number) {
    if(stockNumber < 10) {
      return true;
    }
    else {
      return false;
    }
  }

  // createStar(index:any) {
  //   let star = "";
  //   for (let i = 0; i < index; i++) {
  //     star += <i class="fa-solid fa-star"></i>
  //   }
  // }

  constructor(private recoHttp:RecommendServiceService) { }

  ngOnInit(): void {
    this.recoHttp.getReccomendFromServer().subscribe((recommend) => {
      this.recommendJSON = recommend;
    })
  }

}
