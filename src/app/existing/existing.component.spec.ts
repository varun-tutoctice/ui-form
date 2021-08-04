

import { ExistingComponent } from './existing.component';
import { FormsModule } from '@angular/forms';
import { InvokeService } from './../Services/invoke.service';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, Observer } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastrModule, ToastrService} from 'ngx-toastr';

describe('ExistingComponent', () => {
  let service: InvokeService;
  let component: ExistingComponent;
  let fixture: ComponentFixture<ExistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingComponent ],
      providers: [InvokeService, {provide: ToastrService, useClass: ToastrService}],
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule,ToastrModule.forRoot({preventDuplicates: true})]
    })
    .compileComponents();
    service = TestBed.inject(InvokeService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  function setup() {
    const fixture = TestBed.createComponent(ExistingComponent);
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

  it('should get product information from table', fakeAsync(() => {
    const { fixture, app, userAsyncService } = setup();
    const mockUser = [];
    spyOn(userAsyncService, 'getData').and.returnValue(
      Observable.create((observer) => {
        observer.next(mockUser);
        return observer;
      })
    );

    tick();

    fixture.detectChanges();
    const userAsyncElement = fixture.debugElement.nativeElement;
    const tableData = userAsyncElement.querySelector('table');
    expect(tableData).toBeTruthy();
  }));
});
