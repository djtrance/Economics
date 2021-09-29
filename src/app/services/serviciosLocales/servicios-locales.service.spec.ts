import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServiciosLocalesService } from './servicios-locales.service';
import { HttpClient } from '@angular/common/http';

describe('ServiciosLocalesService', () => {
  let service: ServiciosLocalesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule ]});
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ServiciosLocalesService);
  });
  // Inject the http service and test controller for each test


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
