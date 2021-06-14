import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { ProjectsService } from '../projects.service';
import { NewComponent } from './new.component';

fdescribe('GIVEN the NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;

  let spyProjectsService: jasmine.SpyObj<Partial<ProjectsService>>;

  beforeEach(async () => {
    spyProjectsService = jasmine.createSpyObj<Partial<ProjectsService>>(
      'ProjectsService',
      {
        postProject$: of({}),
      }
    );
    // Arrange
    await TestBed.configureTestingModule({
      declarations: [NewComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: ProjectsService,
          useValue: spyProjectsService,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = fixture.nativeElement;
  });
  describe('WHEN I fill the form', () => {
    beforeEach(() => {
      // Act
      fixture.detectChanges();
    });

    it('THEN  should send the correct values', () => {
      // Act
      const title = debugEl.query(By.css('#title')).nativeElement;
      title.value = 'My testing project';
      title.dispatchEvent(new Event('input'));
      const submit = debugEl.query(By.css('button[type=submit]')).nativeElement;
      submit.dispatchEvent(new Event('click'));
      const actual = spyProjectsService.postProject$;
      // Assert
      expect(actual).toHaveBeenCalled();
      expect(actual).toHaveBeenCalledWith(
        jasmine.objectContaining({ title: 'My testing project' })
      );
    });
  });
});
