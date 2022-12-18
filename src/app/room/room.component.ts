import { Component, OnInit, EventEmitter, } from '@angular/core';
import { RoomService } from '../room.service';
import { IRoom } from './room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  private _searchFilter: string = '';
  rooms: IRoom[] = []
  filteredRoomsbySearch: IRoom[] = [];
  RoomMessage:string=''
  ScreenMessage:string='';
  constructor(private serviceofRoom: RoomService) { }
  
  toggleDtails(roomID: string): void {
    this.rooms.forEach(function (element) {
      if (element._id == roomID) {
        element.showDetail = !element.showDetail
      }
    })
  }

  get searchFilter(): string {
    return this._searchFilter;
  }

  set searchFilter(value: string) {
    this._searchFilter = value;
    this.filteredRoomsbySearch = this.filterRoom(value);
  }

  filterRoom(val: string) {
    return this.rooms.filter((room) =>
      room.title.toLocaleLowerCase().includes(val.toLocaleLowerCase())
    );
  }

  ngOnInit(): void {
    this.serviceofRoom.getProducts().subscribe({
      next: (data) => {
        this.rooms = data;
        this.filteredRoomsbySearch = data;
      }
    })
  }
  RoomClicked(Message:string){
    this.ScreenMessage=Message;
  }

}