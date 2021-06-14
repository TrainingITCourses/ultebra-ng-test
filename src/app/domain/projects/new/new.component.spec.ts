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
    // Arrange
    spyProjectsService = jasmine.createSpyObj<Partial<ProjectsService>>('', {
      postProject$: of({}),
    });
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
  describe('WHEN I fill the form ', () => {
    beforeEach(() => {
      // Act
      fixture.detectChanges();
    });

    it('THEN should send it as a payload', () => {
      // Act
      const title = debugEl.query(By.css('#title')).nativeElement;
      title.value = 'My testing project for Ultebra';
      title.dispatchEvent(new Event('input'));
      const submit = debugEl.query(By.css('button[type=submit]')).nativeElement;
      submit.dispatchEvent(new Event('click'));
      // Assert
      expect(spyProjectsService.postProject$).toHaveBeenCalled();
      expect(spyProjectsService.postProject$).toHaveBeenCalledWith({
        id: 'my-testing-project-for-ultebra',
        title: 'My testing project for Ultebra',
        start: '2021-06-14',
        end: '',
        budget: 0,
        description: '',
        status: 'En marcha',
      });
      expect(spyProjectsService.postProject$).toHaveBeenCalledWith(
        jasmine.objectContaining({ title: 'My testing project for Ultebra' })
      );
    });
  });
});
