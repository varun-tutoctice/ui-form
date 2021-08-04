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
  selector: 'app-existing',
  templateUrl: './existing.component.html',
  styleUrls: ['./existing.component.css']
})
export class ExistingComponent implements OnInit {

  data;
  constructor(
    private nx: InvokeService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.nx.getData().subscribe(response=>{
      this.data = response;
    })
  }

}
