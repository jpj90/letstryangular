import { TestBed, inject } from '@angular/core/testing';

import { PersistforecastService } from './persistforecast.service';

describe('PersistforecastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersistforecastService]
    });
  });

  it('should be created', inject([PersistforecastService], (service: PersistforecastService) => {
    expect(service).toBeTruthy();
  }));
});
