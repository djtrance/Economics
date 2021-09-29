import { TestBed } from '@angular/core/testing';

import { StorageOnBrowserService } from './storage-on-browser.service';

describe('StorageOnBrowserService', () => {
  let service: StorageOnBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageOnBrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be null', () => {
    expect(service.getDatos()).toEqual(null);
  });

  it("I set up data, it should be 'Test'", () => {
    service.setDatos("Test");
    expect(service.getDatos()).toBe("Test");
  });

});
