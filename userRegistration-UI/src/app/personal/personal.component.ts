import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormGroupDirective, NgForm, Validators, FormControl } from "@angular/forms";
import { RegistrationService } from '../registration.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { AlertsService } from 'angular-alert-module';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

export interface Location {
  value: string;
}
export interface Language {
  value:string;
}
export interface Genre {
  id: boolean;
  name: string;
}

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [RegistrationService]
})
export class PersonalComponent implements OnInit {

  matcher = new MyErrorStateMatcher();


  isLinear = true;
  selectedLocation
  userName
  userEmail
  userPassword
  password
  confirmPassword
  userPhone_number
  genderOfUser
  userDateOfBirth = "";
  completeDetails = []
  selectGenre;
  gen = []
  languages =[]
  public userDetails: FormGroup
  public stepDetails: FormGroup
  Msg;
  selectedLanguages;
  constructor(private formBuilder: FormBuilder, private userService: RegistrationService,private alerts:AlertsService) { }

  ngOnInit() {
    // this.userDetails = this.formBuilder.group(
    //   {
    //     name: new FormControl("", Validators.compose([
    //       Validators.required,
    //       Validators.pattern("^[a-zA-Z]([._-]?[a-zA-Z0-9]+)*$"),
    //     ])),
    //     email: new FormControl("", Validators.email),
    //     password: new FormControl("", Validators.minLength(6))
    //   }
    // )

    // testing purpose

    this.userDetails = new FormGroup({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern("^[a-zA-Z]([._-]?[a-zA-Z0-9]+)*$")
      ])),
      password: new FormControl('', Validators.minLength(6)),
     
      email: new FormControl("", Validators.email),
      passwordConfirm: new FormControl('', Validators.minLength(6))
    }, {validators:passwordMatchValidator});


    function passwordMatchValidator(group: FormGroup) {
      // return (g.get('password').value === g.get('passwordConfirm').value )? null : { 'mismatch': true };

      let pass = group.controls.password.value;
      let confirmPass = group.controls.passwordConfirm.value;
  
      return pass === confirmPass ? null : { mismatch: true }


    }
//    working code 
    this.stepDetails = this.formBuilder.group(
      {
        city: new FormControl(""),
        dob: new FormControl(""),
        gender: new FormControl(""),
        phone_number: new FormControl("", Validators.compose([
          Validators.maxLength(10),
          Validators.minLength(10),
         Validators.pattern("^[0-9]*$")
          //  Validators.pattern("/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/")
          // Validators.pattern("^(\+91(-)?|91(-)?|0(-)?)?(9)[0-9]{9}$")
        ])),
    
      }
    )

  }
  locations: Location[] = [
    { value: "Bangalore" },
    { value: "Delhi" },
    { value: "Hyderabad" },
    { value: "Mumbai" },
    { value: "Chennai" },
    { value: "Guwahati" }
  ]

  langList :Language[]=[
{ value:"English"},
{value:"Telugu"},
{value:"Hindi"},
{value:"Tamil"},
{value:"Malyalam"},
{value:"Marathi"},
{value:"Bengali"},
{value:"Assamese"}

  ]
  saveDetails() {
    var m = {
      'email': this.completeDetails[0].email,
      'name': this.completeDetails[0].name,
      'password': this.completeDetails[0].passwordConfirm,
      'city': this.completeDetails[1].city,
      'phoneNumber': this.completeDetails[1].phone_number,
      'gender': this.completeDetails[1].gender,
      'genre': this.gen,
      'language':this.selectedLanguages
      
    }
    this.userService.saveUserDetails(m).subscribe(com => {
      console.log("saved");
      this.alerts.setMessage("Saved succesfully",'success');
    },error=>{
      this.alerts.setMessage("User Already Exists",'error');
    })
  }

  onSubmitUserDetails(value) {
    console.log(value)
    this.completeDetails.push(value)
  }
  onSubmitStepDetails(value) {

    
    this.completeDetails.push(value)
    console.log(this.completeDetails[1])

  }
  onSubmitStep2Details(value) {
    console.log(value)
    this.gen.push(value)

  }
  
  validation_messages = {
    'name': [
      { type: 'required', message: 'Username is required' },
      { type: 'pattern', message: 'Username should start with a letter and no spaces' }
    ]
  }
}

