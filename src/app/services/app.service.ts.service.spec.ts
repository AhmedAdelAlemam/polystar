import { TestBed } from '@angular/core/testing';

import { App.Service.TsService } from './app.service';

describe('App.Service.TsService', () => {
  let service: App.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
