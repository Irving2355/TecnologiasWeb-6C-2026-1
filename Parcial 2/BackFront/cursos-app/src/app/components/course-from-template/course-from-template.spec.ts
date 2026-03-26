import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFromTemplate } from './course-from-template';

describe('CourseFromTemplate', () => {
  let component: CourseFromTemplate;
  let fixture: ComponentFixture<CourseFromTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseFromTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseFromTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
