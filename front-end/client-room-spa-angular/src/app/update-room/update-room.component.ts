import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  id: number = 0;
  room: Room = new Room();
  submitted=false;


  constructor(private aRoute: ActivatedRoute, private router: Router, private roomService: RoomService) { }

  ngOnInit(){
    this.room = new Room();
    this.id = this.aRoute.snapshot.params['id'];
    this.roomService.getRoom(this.id).subscribe(
      (data:any) => {
        console.log(data);
        this.room = data;
      }, (error: any) => console.log(error)
    );
  }

  updateRoom(){
    this.roomService.updateRoom(this.id, this.room).subscribe(
      (data: any) => console.log(data),
      (error: any) => console.log(error)
    );
    this.room = new Room();
    this.goToList();
  }

  onSubmit(){
    this.updateRoom();
  }

  goToList(){
    this.router.navigate(['/rooms']);
  }
}
