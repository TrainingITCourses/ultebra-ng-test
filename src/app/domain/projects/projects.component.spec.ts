import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NoDataYetComponent } from 'src/app/shared/ui/no-data-yet/no-data-yet.component';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';

describe('GIVEN the ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;

  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      imports: [UiModule],
      providers: [
        {
          provide: ProjectsService,
          useValue: jasmine.createSpyObj('ProjectsService', {
            getProjects$: of([]).pipe(delay(100)),
            getTransactions$: of([]).pipe(delay(100)),
            composeProjectViews: [],
          }),
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = fixture.nativeElement;
  });
  describe('WHEN initializing', () => {
    beforeEach(() => {
      // Act
      fixture.detectChanges();
    });

    it('THEN renders ab-no-data-yet', () => {
      // Act
      const actual = debugEl.query(By.directive(NoDataYetComponent));
      // Assert
      expect(actual).toBeDefined();
    });

    it('AND THEN shows Esperando datos...', () => {
      const quoteDebug = debugEl.query(By.css('blockquote'));
      const quoteNative = quoteDebug.nativeElement;
      const actual = quoteNative.textContent;
      expect(actual).toEqual('Esperando datos...');
    });
  });
  describe('WHEN initialized and stable', () => {
    beforeEach(() => {
      // Act
      fixture.detectChanges();
      component.ngOnInit();
      fixture.detectChanges();
    });
    it('THEN there is a table', fakeAsync(() => {
      // Act
      tick(100); // espera para que se resuelva el observable
      fixture.detectChanges(); // fuerza el recálculo de la vista
      const actual: any = nativeEl.querySelector('table');
      // Assert
      expect(actual).toBeDefined();
    }));
  });
});
