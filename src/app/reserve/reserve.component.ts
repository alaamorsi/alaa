import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent {
  @Input() Troom:string='';
  @Output()  RoomMessage:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
onClick():void{
  this.RoomMessage.emit(`${this.Troom} has been booked successfully ✓ `);
}


}
