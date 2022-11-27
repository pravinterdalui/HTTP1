import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-user-http',
  templateUrl: './user-http.component.html',
  styleUrls: ['./user-http.component.scss']
})
export class UserHttpComponent implements OnInit {
  userCredentials: any;
  edituserRecords: any
  disableSubmit: boolean = false;

  constructor(private _userservice: UserService) { }
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    address: new FormControl('', [Validators.required]),
    skills: new FormControl(),
    hobbies: new FormControl(),
  })


  ngOnInit(): void {
    this.getuserInfo()
  }

  get f(){
    return this.userForm.controls;
  }

  SubmitUserRecords() {
    let obj = {
      name: this.userForm.value.name,
      mobile: this.userForm.value.mobile,
      address: this.userForm.value.address,
      skills: this.userForm.value.skills,
      hobbies: this.userForm.value.hobbies,
      id: ''
    }
    this._userservice.saveuserInfo(obj).subscribe(response => {
      console.log("Data saved successfully" + response)
      this.getuserInfo();
      this.userForm.reset();
    })
  }

  getuserInfo() {
    this._userservice.getUserDetails().subscribe(response => {
      console.log("user info = " + response)
      this.userCredentials = response;
    })
  }

  EditRecords(user: any) {
    this.userForm.patchValue({
      name: user.name,
      mobile: user.mobile,
      address: user.address,
      skills: user.skills,
      hobbies: user.hobbies,
    })
    this.edituserRecords = user
    this.disableSubmit = true
  }

  updateUserRecords() {
    let obj = {
      name: this.userForm.value.name,
      mobile: this.userForm.value.mobile,
      address: this.userForm.value.address,
      skills: this.userForm.value.skills,
      hobbies: this.userForm.value.hobbies,
      id: this.edituserRecords.id
    }

    this._userservice.edituserInfo(this.edituserRecords.id, obj).subscribe(res => {
      console.log("Data updated " + res)
      this.userForm.reset();
      this.getuserInfo();
      this.disableSubmit = false;

    })

  }

  deleteRecords(user: any) {
    this._userservice.deleteUserInfo(user.id).subscribe(resposnse => {
      console.log("Data deleted ")
      this.getuserInfo();
    })
  }


}
