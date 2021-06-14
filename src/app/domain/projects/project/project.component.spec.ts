import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { UiModule } from 'src/app/shared/ui/ui.module';
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
    const routes: Routes = [
      {
        path: 'projects/:id',
        component: ProjectComponent,
      },
    ];
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), UiModule],
      declarations: [ProjectComponent],
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
  describe('WHEN The location is projects/1', () => {
    beforeEach(() => {
      // Act
      router = TestBed.inject(Router);
      activatedRoute = TestBed.inject(ActivatedRoute);
      fixture.detectChanges();
    });

    it('THEN the url is well formed', () => {
      // Act
      fixture.ngZone?.run(() => {
        router.navigate(['/projects/1']);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          // Assert
          const actual = router.url;
          const expected = '/projects/1';
          expect(actual).toEqual(expected);
        });
      });
    });
  });
  describe('WHEN navigate to projects/1', () => {
    beforeEach(async () => {
      // Act
      router = TestBed.inject(Router);
      activatedRoute = TestBed.inject(ActivatedRoute);
      await router.navigate(['/projects/1']);
      fixture.detectChanges();
    });

    it('THEN the url is still well formed', () => {
      // Act
      const actual = router.url;
      // Assert
      const expected = '/projects/1';
      expect(actual).toEqual(expected);
    });
  });
});
