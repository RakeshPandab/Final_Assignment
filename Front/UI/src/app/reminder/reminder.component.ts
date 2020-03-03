import { Component, OnInit, Input } from '@angular/core';
import { Reminder } from '../reminder';
import { ReminderService } from '../services/reminder.service';
@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  @Input()
  
  reminder:any;
  constructor(public reminderService: ReminderService) { }

  ngOnInit() {
    
    console.log(this.reminderService.fetchRemindersFromServer().subscribe(categories => {
      this.reminder = categories;
      console.log(this.reminder);
     
     
    }));
  }
  
}
