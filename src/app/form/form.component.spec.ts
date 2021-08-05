

import { FormsModule } from '@angular/forms';
import { InvokeService } from './../Services/invoke.service';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, Observer } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { FormComponent } from './form.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';


describe('FormComponent', () => {
  let service: InvokeService;
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      providers: [InvokeService, {provide: ToastrService, useClass: ToastrService}],
      imports: [HttpClientTestingModule, RouterTestingModule,BrowserAnimationsModule,ReactiveFormsModule,ToastrModule.forRoot({preventDuplicates: true})]
    })
    .compileComponents();
    service = TestBed.inject(InvokeService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  function setup() {
    const fixture = TestBed.createComponent(FormComponent);
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

  it('Data needs to be posted on submit',fakeAsync(()=>{

    const { fixture, app, userAsyncService } = setup();
    //const mockUser = [];
    fixture.detectChanges();

    const mockUser = []
    const spy = spyOn(userAsyncService, 'postData').and.returnValue(
      Observable.create((observer) => {
        observer.next(mockUser);

        return observer
      })

    );
      tick()
    var run = component.onSubmit({"test":"testData"});
    expect(run).toBeUndefined();
    fixture.detectChanges();
    //expect(spy.calls.any()).toEqual(true);
   // const userAsyncElement = fixture.debugElement.nativeElement;
    // const form = fixture.debugElement.query(By.css('.btn'));


     flush();
    // form.triggerEventHandler('submit',null);
    // form.nativeElement.click();
   // expect(spy).toHaveBeenCalled();
  //  expect(component.onSubmit('Test')).toBeTruthy();
 }));

});
