import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateUserComponent } from '../../components/modals/create-user/create-user.component';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user:User;
  @Output() deleteUser: EventEmitter<User> = new EventEmitter();

  id:number;
  image:string;
  firstname:string;
  lastname:string;
  imageUrl:string;
  country:string;
  status:string;

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
    this.id = this.user.id;
    this.image = decodeURIComponent(this.user.image);
    this.firstname = this.user.firstname;
    this.lastname = this.user.lastname;
    this.country = this.user.country.length > 0 ? this.user.country : "Not Specified";
    if (this.user.firstname.length > 0 && this.user.lastname.length > 0 && this.user.country.length > 0 && this.user.image.length > 0) {
      this.status = 'Complete';
    } else {
      this.status = 'Incomplete';
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '600px',
      height: '400px',
      data: {id: this.id, image: this.image, firstname: this.firstname, lastname: this.lastname, country: this.country}
    });
  }

  // onToggle(user) {
  //   user.completed = !user.completed;
  // }

  getClasses(user) {
    let countryClass = user.country.length > 0 ? '' : 'no-country';
    return countryClass;
  }

  getStatusColor(user) {
    let statusClass;
    if (user.firstname.length > 0 && user.lastname.length > 0 && user.country.length > 0 && user.image.length > 0) {
      statusClass = 'complete-status';
    } else {
      statusClass = 'incomplete-status';
    }
    return statusClass;
  }

  onDelete(user) {
    this.deleteUser.emit(user);
  }

}
