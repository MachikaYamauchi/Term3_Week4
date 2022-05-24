import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Login {
  login: boolean;
  message:string;
  data:[
    {
      id: number,
      username: string,
      email: string,
      password: string
    }
  ]
}

interface OneProduct {
  getOneProduct: boolean;
  message: string;
  data: [
    {
      id:number;
      image1: string;
      image2: string;
      image3: string;
      name: string;
      rating: number;
      price: string;
      stock: number;
      alt: string;
      description:string;
      display:any;
    }
  ]
}



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  signupURL = "http://localhost:4400/signup";
  loginURL = "http://localhost:4400/login";
  addURL = "http://localhost:4400/add";
  updateURL = "http://localhost:4400/update";
  updateProductURL = "http://localhost:4400/updateProduct";
  deleteURL = "http://localhost:4400/delete";
  toggleDisplayURL = "http://localhost:4400/toggleDisplay"

  constructor(private http:HttpClient) { }

  signup(username:string, email:string, password:string) {
    let signupBody = {
      username:username,
      email:email,
      password:password
    }
    return this.http.post<{signup:boolean, message:any}>(this.signupURL, signupBody);
  }

  login(username:string, password:string) {
    let loginBody = {
      username:username,
      password:password
    }
    return this.http.post<Login>(this.loginURL, loginBody);
  }

  add(image1:string, image2:string, image3:string, name:string, rating:number, price:string, stock:number, alt:string, description:string, display:string) {
    let addBody = {
      image1:image1,
      image2:image2,
      image3:image3,
      name:name,
      rating:rating,
      price:price,
      stock:stock,
      alt:alt,
      description:description,
      display:display
    }
    return this.http.post<{add:boolean, message:string}>(this.addURL, addBody);
  }

  update(id:number){
    return this.http.get<OneProduct>(this.updateURL + "/" + id);
  }

  updateProduct(productID:any, image1:string, image2:string, image3:string, name:string, rating:number, price:string, stock:number, alt:string, description:string, display:string){
    let updateBody = {
      productID:productID,
      image1:image1,
      image2:image2,
      image3:image3,
      name:name,
      rating:rating,
      price:price,
      stock:stock,
      alt:alt,
      description:description,
      display:display
    }
    return this.http.put<{update:boolean, message:string}>(this.updateProductURL, updateBody);
  }

  delete(id:any) {
    return this.http.delete<{delete:boolean, message:string}>(this.deleteURL + "/" + id)
  }

  toggleDisplay(id:any) {
    let postID = {
      id:id
    }
    return this.http.put<{toggleDisplay:boolean, message:string}>(this.toggleDisplayURL, postID)
  }
}
