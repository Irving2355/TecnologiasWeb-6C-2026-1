import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFromReactive } from './course-from-reactive';

describe('CourseFromReactive', () => {
  let component: CourseFromReactive;
  let fixture: ComponentFixture<CourseFromReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseFromReactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseFromReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
