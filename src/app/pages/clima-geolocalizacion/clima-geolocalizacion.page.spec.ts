import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClimaGeolocalizacionPage } from './clima-geolocalizacion.page';

describe('ClimaGeolocalizacionPage', () => {
  let component: ClimaGeolocalizacionPage;
  let fixture: ComponentFixture<ClimaGeolocalizacionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimaGeolocalizacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClimaGeolocalizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
