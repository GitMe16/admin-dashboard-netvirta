import { FormGroup, FormControl } from '@angular/forms';

export class User {
    id:number;
    image:string;
    firstname:string;
    lastname:string;
    country:string;
}

export interface DialogData {
    id:number;
    image:string;
    firstname:string;
    lastname:string;
    country:string;
}

export class Country {
    country:string;
    code:string;
}