import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  Form,
  FormArray,
} from '@angular/forms';
import { InvokeService } from '../Services/invoke.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form;
  constructor(
    private nx: InvokeService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      message: new FormControl('',[Validators.required]),
    });
  }


  onSubmit(uploadNexus) {
    this.toastr.success("Message posted Successfully !!!")
   // console.log(uploadNexus.value);
    // this.nx.postData(uploadNexus.value).subscribe(response=>{
    //   console.log("Data Posted");
    //   this.toastr.success("Message posted Successfully !!!")
    //   this.form.reset();
    // });
  }
}
