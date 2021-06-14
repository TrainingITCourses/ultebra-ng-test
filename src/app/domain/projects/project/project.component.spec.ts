import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProjectsService } from '../projects.service';
import { ProjectComponent } from './project.component';

describe('GIVEN the ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;

  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    // Arrange

    await TestBed.configureTestingModule({
      declarations: [ProjectComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'projects/:id', component: ProjectComponent },
        ]),
      ],
      providers: [
        {
          provide: ProjectsService,
          useValue: jasmine.createSpyObj('', {
            getProject$: of({}),
          }),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = fixture.nativeElement;
  });
  describe('WHEN navigate to projects/1', () => {
    beforeEach(() => {
      router = TestBed.inject(Router);
      activatedRoute = TestBed.inject(ActivatedRoute);
      // Act
      fixture.detectChanges();
    });

    it('THEN router detects and processes the route', () => {
      // Act
      router.navigate(['projects/1']);
      // fixture.detectChanges();
      fixture.whenStable().then(() => {
        const actual = router.url;
        // Assert
        const expected = '/projects/1';
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('WHEN navigate async await to projects/1', () => {
    beforeEach(async () => {
      router = TestBed.inject(Router);
      activatedRoute = TestBed.inject(ActivatedRoute);
      // Act
      fixture.detectChanges();
      await router.navigate(['projects/1']);
    });

    it('THEN router detects and processes the route', () => {
      // Act
      const actual = router.url;
      // Assert
      const expected = '/projects/1';
      expect(actual).toEqual(expected);
    });
  });
});
