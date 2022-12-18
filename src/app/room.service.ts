import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService { 

  url='mongodb+srv://OHR:ohr12345@cluster0.0d2enjw.mongodb.net/?retryWrites=true&w=majority'
   
  constructor(private http:HttpClient) { }

  getRooms():Observable<any>{
    //observable
   return this.http.get<any>(this.url);
  }

  getRoomsById(roomId:string):Observable<any>{
    return this.http.get(`mongodb+srv://OHR:ohr12345@cluster0.0d2enjw.mongodb.net/${roomId}?retryWrites=true&w=majority`)
  }

  getProducts():Observable<any>{
  return this.http.get('http://localhost:3000/getProducts')
  }
}