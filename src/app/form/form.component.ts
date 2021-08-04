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
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form;

  constructor(
    private nx: InvokeService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      companyName: new FormControl('',[Validators.required]),
      contactName: new FormControl('',[Validators.required]),
      contactInfo: new FormControl('',[Validators.required]),
      productName: new FormControl('',[Validators.required]),
      productType: new FormControl('',[Validators.required]),
      targetFDA: new FormControl('',[Validators.required]),
      prDate: new FormControl('',[Validators.required]),
      type: new FormControl('Products'),
    });
  }



  onSubmit(uploadNexus) {
    console.log(uploadNexus.value);
    this.nx.postData(uploadNexus.value).subscribe(response=>{
      this.toastr.success("Product Registered Successfully !!!")
      this.form.reset();
    });
  }
}
