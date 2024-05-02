import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenRubenHuertasUF2';

  constructor(private http: HttpClient) {
    //this.modifCorreu();
    //this.llistaAssig();
    //this.modifDept();
    //this.impartirAssig();
  }
  modifCorreu(){
    this.http.post('http://localhost:3000/modifCorreuHuertasGonzalez',{}).subscribe()
  }
  llistaAssig(){
    this.http.get('http://localhost:3000/llistaAssigHuertasGonzalez',{}).forEach((resposta)=>{
      console.log(resposta)
    })
  }
  modifDept(){
    this.http.put('http://localhost:3000/modifDeptHuertasGonzalez', {codi: 5, nom: "Examen", ubicacio:"Sils", telef: 12345678, dni:11223}).subscribe((data)=>{
      console.log(data)
    })
  }
  impartirAssig(){
    this.http.get('http://localhost:3000/impartirAssigHuertasGonzalez', {}).forEach((resposta)=>{
      console.log(resposta)
    })
  }



}
