import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';
import { throwError, Subject } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class InvokeService {
  serviceUrl = environment.serviceUrl;

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`${this.serviceUrl}?filter[where][type]=Products`);
  }

  postData(data) {
    var options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post(`${this.serviceUrl}`, data, options);
  }
}
