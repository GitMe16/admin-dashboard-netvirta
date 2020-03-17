import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, Country } from '../../../models/User';
import { CountryService } from '../../../services/user.service';
import { IconsService } from '../../../services/icons/icons.service';
import { FormGroup, FormControl } from '@angular/forms';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent {

  countries:Country[];

  id:number;
  image:string;
  firstname:string;
  lastname:string;
  country:string;
  files:File;

  fileName:string;
  filestring:string;
  closeIcon:string;

  editUser:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData, private countryService:CountryService, private iconsService:IconsService) {}

  ngOnInit(): void {
    this.id = this.data.id;
    this.image = this.data.image;
    this.firstname = this.data.firstname;
    this.lastname = this.data.lastname;
    this.country = this.data.country;
    this.fileName = '';

    this.editUser = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      country: new FormControl()
    });

    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries;
    });

    this.closeIcon = this.iconsService.closeIcon();
  }

  imgInputChange(fileInputEvent: any) {
    this.files = fileInputEvent.target.files[0];
  }

  submitEdits(form):void {
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}