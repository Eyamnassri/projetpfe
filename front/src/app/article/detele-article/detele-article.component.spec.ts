import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteleArticleComponent } from './detele-article.component';

describe('DeteleArticleComponent', () => {
  let component: DeteleArticleComponent;
  let fixture: ComponentFixture<DeteleArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeteleArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeteleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
