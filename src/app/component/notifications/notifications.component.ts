import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
ann:any
  constructor(private api:ApiService){}
ngOnInit(): void {
  this.get()
}
get() {
  this.api.getAnnouncement().subscribe(
    (res) => {
      this.ann = res;
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  );
}

}
