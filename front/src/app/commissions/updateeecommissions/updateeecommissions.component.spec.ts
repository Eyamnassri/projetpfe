import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateeecommissionsComponent } from './updateeecommissions.component';

describe('UpdateeecommissionsComponent', () => {
  let component: UpdateeecommissionsComponent;
  let fixture: ComponentFixture<UpdateeecommissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateeecommissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateeecommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
