import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUnitComponent } from './search-unit.component';

describe('SearchUnitComponent', () => {
  let component: SearchUnitComponent;
  let fixture: ComponentFixture<SearchUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
