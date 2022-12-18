import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.css']
})
export class RoomdetailsComponent implements OnInit {
  room:any={}
 constructor(private route:ActivatedRoute,private roomDetailsService:RoomService) { }

 ngOnInit(): void {
   const id =this.route.snapshot.paramMap.get('_id')
  this.roomDetailsService.getRoomsById(id!).subscribe({next:(data)=>{
    
  this.room=data;
    }})

 }

}