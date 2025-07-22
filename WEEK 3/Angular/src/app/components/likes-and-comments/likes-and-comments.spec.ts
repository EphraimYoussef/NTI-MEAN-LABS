import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesAndComments } from './likes-and-comments';

describe('LikesAndComments', () => {
  let component: LikesAndComments;
  let fixture: ComponentFixture<LikesAndComments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikesAndComments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikesAndComments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
