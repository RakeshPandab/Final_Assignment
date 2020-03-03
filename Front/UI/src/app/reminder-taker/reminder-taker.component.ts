import { Component, OnInit } from '@angular/core';
import { Reminder } from '../reminder';
import { ReminderService } from '../services/reminder.service';
@Component({
  selector: 'app-reminder-taker',
  templateUrl: './reminder-taker.component.html',
  styleUrls: ['./reminder-taker.component.css']
})
export class ReminderTakerComponent implements OnInit {

  public rem: Reminder;
  errMessage: string;
  // public category: category;
  constructor(private reminderService: ReminderService) {
    this.rem = new Reminder();
   // this.reminderService.fetchcategoriesFromServer(localStorage.getItem("userId"));
  }
  ngOnInit() {

  }
  addReminder() {
    //this.noteList.push(this.note);
    //console.log(this.note);

    if (this.rem.reminderId !== '' && this.rem.reminderName !== ''
      && this.rem.reminderDescription !== '' ) {
      this.reminderService.addReminder(this.rem).subscribe(
        data => { console.log('inside data of addcatgeory ', data)},
        err => {
          console.log('err object in addCategory ', err);
          this.errMessage = err.error.text;
        }
      )
      this.rem = new Reminder();
    } else {
      this.errMessage = 'All the fields are required.. Please fill and continue';
    }
  }
}
