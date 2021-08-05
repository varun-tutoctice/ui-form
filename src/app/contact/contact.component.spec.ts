

import { FormsModule } from '@angular/forms';
import { InvokeService } from './../Services/invoke.service';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, Observer } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { ContactComponent } from './contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('ContactComponent', () => {
  let service: InvokeService;
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      providers: [InvokeService, {provide: ToastrService, useClass: ToastrService}],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, ToastrModule.forRoot({preventDuplicates: true})]
    })
    .compileComponents();
    service = TestBed.inject(InvokeService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function setup() {
    const fixture = TestBed.createComponent(ContactComponent);
    const app = fixture.debugElement.componentInstance;
    const userAsyncService = fixture.debugElement.injector.get(
      InvokeService
    );

    return { fixture, app, userAsyncService };
  }


  it('should create the app component', () => {
    const { app } = setup();
    expect(app).toBeTruthy();
  });


  it('Show data posted onSubmit',()=>{
    var run = component.onSubmit('Test');
    expect(run).toBeUndefined();
 })

});
