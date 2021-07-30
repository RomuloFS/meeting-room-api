  import { Room } from '../room';
import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from '../room.service';
import { RoomListComponent } from '../room-list/room-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  id: number = 0;
  room: Room | undefined;

  constructor(private aRoute: ActivatedRoute, private router: Router, private roomService: RoomService) { }

  ngOnInit(){
    this.room = new Room();
    this.id = this.aRoute.snapshot.params['id'];

    this.roomService.getRoom(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.room = data;
      }, (error: any) => console.log(error));

  }

  list(){
    this.router.navigate(['rooms']);
  }

}
