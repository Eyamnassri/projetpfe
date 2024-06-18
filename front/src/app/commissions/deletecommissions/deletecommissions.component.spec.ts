import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecommissionsComponent } from './deletecommissions.component';

describe('DeletecommissionsComponent', () => {
  let component: DeletecommissionsComponent;
  let fixture: ComponentFixture<DeletecommissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecommissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletecommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
