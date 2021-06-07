import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';
import { HomeDataService } from './home.data.service';
import { HomeLogicService } from './home.logic.service';
import { Status } from './models/status';

fdescribe('GIVEN the HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;
  let homeDataStub: jasmine.SpyObj<HomeDataService>;

  beforeEach(async () => {
    // Arrange

    homeDataStub = jasmine.createSpyObj<HomeDataService>('', [
      'getProjects$',
      'getTransactions$',
      'getTasks$',
    ]);
    homeDataStub.getProjects$.and.returnValue(of([]));
    homeDataStub.getTransactions$.and.returnValue(of([]));
    homeDataStub.getTasks$.and.returnValue(of([]));
    const homeLogicStub = jasmine.createSpyObj<HomeLogicService>('', [
      'composeProjectViews',
      'composeTasksView',
    ]);
    homeLogicStub.composeProjectViews.and.returnValue([
      {
        tasks: [],
        transactions: [],
        profit: 0,
        balance: 0,
        budget: 0,
        status: Status.Canceled,
        id: '',
        title: '',
      },
    ]);
    homeLogicStub.composeTasksView.and.returnValue({ total: 0, pending: 0 });
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: HomeDataService,
          useValue: homeDataStub,
        },
        {
          provide: HomeLogicService,
          useValue: homeLogicStub,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = fixture.nativeElement;
  });
  describe('WHEN does not receive data', () => {
    beforeEach(() => {
      // Act

      fixture.detectChanges();
    });

    it('THEN should display 3 ab-label-value tags', () => {
      // Assert
      const actual = debugEl.queryAll(By.css('ab-label-value')).length;
      const expected = 3;
      expect(actual).toEqual(expected);
    });
  });
});
