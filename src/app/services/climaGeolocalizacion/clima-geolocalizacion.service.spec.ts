import { TestBed } from '@angular/core/testing';

import { ClimaGeolocalizacionService } from './clima-geolocalizacion.service';

describe('ClimaGeolocalizacionService', () => {
  let service: ClimaGeolocalizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimaGeolocalizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
