import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsGraphComponent } from './projects-graph.component';

describe('ProjectsGraphComponent', () => {
  let component: ProjectsGraphComponent;
  let fixture: ComponentFixture<ProjectsGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsGraphComponent]
    });
    fixture = TestBed.createComponent(ProjectsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
