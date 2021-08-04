import { TestBed } from '@angular/core/testing';

import { InvokeService } from './invoke.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from './../../environments/environment';

describe('InvokeService', () => {
  let service: InvokeService;
  let url = environment.serviceUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvokeService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(InvokeService);

  });

  function setup() {
    const sharedService = TestBed.get(InvokeService);
    const httpTestingController = TestBed.get(HttpTestingController);
    return { sharedService, httpTestingController };
  }


  it('should call the build information data', () => {
    const { sharedService, httpTestingController } = setup();
   // const mockGoogleMapData = {id: 1, country : 'United states of america', zipcode: '56743'};
    sharedService.getData().subscribe(data => {
      expect(data).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${url}?filter[where][type]=Products`);

    expect(req.request.method).toBe('GET');

    // req.flush({
    //   mapData: mockGoogleMapData
    // });
  });


  it('should post the product data', () => {
    const { sharedService, httpTestingController } = setup();
   const mockData = {companyName: 1, contactName: 'United states of america', contactInfo: '56743', productName: 'Test', productType: 'Test', targetFDA: 'Test', prDate: 'Test', type: 'Test' };
    sharedService.postData(mockData).subscribe(data => {
      expect(data).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${url}`);

    expect(req.request.method).toBe('POST');

    // req.flush({
    //   mapData: mockGoogleMapData
    // });
  });
});
