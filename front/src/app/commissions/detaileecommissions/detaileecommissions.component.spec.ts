import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileecommissionsComponent } from './detaileecommissions.component';

describe('DetaileecommissionsComponent', () => {
  let component: DetaileecommissionsComponent;
  let fixture: ComponentFixture<DetaileecommissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaileecommissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaileecommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
