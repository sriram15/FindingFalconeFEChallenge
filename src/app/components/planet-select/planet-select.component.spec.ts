import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetSelectComponent } from './planet-select.component';

describe('PlanetSelectComponent', () => {
  let component: PlanetSelectComponent;
  let fixture: ComponentFixture<PlanetSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
