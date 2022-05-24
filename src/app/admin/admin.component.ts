import { Component, OnInit } from '@angular/core';
import { RecommendServiceService } from '../services/recommend-service.service';
import { Recommend } from '../interfaces/recommend.interface';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  recommendJSON:Recommend[] =[];

  image1:string = "";
  image2:string = "";
  image3:string = "";
  name:string = "";
  rating:number = 0;
  price:string = "";
  stock:number = 0;
  alt:string = "";
  description:string = "";
  display:any = 0;

  liveOnSite:string = "";

  addStatus = false;
  addDisplay = "none";
  addMessage:any = "";

  constructor(private recoHttp:RecommendServiceService, private cs:CommonService, private router:Router) { }

  toggleDisplay(id:any) {
    this.cs.toggleDisplay(id).subscribe(response=> {
    })
  }

  add() {
    this.cs.add(this.image1, this.image2, this.image3, this.name, this.rating, this.price, this.stock, this.alt,this.description, this.display).subscribe(addData=> {
      console.log(addData);
      this.addStatus = addData.add;
      this.addDisplay = "block";
      this.addMessage = addData.message
    })
  }

  delete(id:any){
    if(confirm("Are you sure?")) {
      // let id:any = this.route.snapshot.paramMap.get("id");
      this.cs.delete(id).subscribe(deletedata=> {
        console.log(deletedata);
        if(deletedata.delete) {
          // this.router.navigate(['/admin']);
          this.ngOnInit();
        }
      })
    }
  }

  signOut() {
    if(confirm("Are you sure to sign out?")) {
      localStorage.setItem("userID", "0");
      this.router.navigate(['/login']);
    }
  }



  ngOnInit(): void {
    this.recoHttp.getReccomendFromServer().subscribe((recommend) => {
      console.log(recommend);
      this.recommendJSON = recommend;
    })
  }

}
