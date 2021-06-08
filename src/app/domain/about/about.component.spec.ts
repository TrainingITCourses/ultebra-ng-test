import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AboutComponent } from './about.component';

// 4 - S.U.T. COMPONENT WITHOUT dependencies
// Test like any other TypeScript class

describe('The About Component', () => {
  describe('GIVEN: an instance of the controller', () => {
    let sut = new AboutComponent();
    let actual: unknown = null;
    beforeEach(() => {});

    describe('WHEN ask for the title', () => {
      beforeEach(() => {
        actual = sut.title;
      });
      it('THEN should return _Angular Budget_', () => {
        const expected = 'Angular Budget';
        expect(actual).toEqual(expected);
      });
    });
  });
});

describe('GIVEN the AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;

  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = fixture.nativeElement;
  });
  describe('WHEN the title is not initialized', () => {
    beforeEach(() => {
      // Act
      fixture.detectChanges();
    });

    it('THEN is shown in a H2 tag', () => {
      // Assert
      const actual = nativeEl.querySelector('h2')?.textContent;
      const expected = 'Angular Budget';
      expect(actual).toEqual(expected);
      const actual2 = debugEl.query(By.css('h2')).nativeElement.textContent;
      expect(actual2).toEqual(expected);
    });
  });
  describe('WHEN the title is changed after initialized', () => {
    beforeEach(() => {
      // Act
      component.title = 'Changed after initialization';
      fixture.detectChanges();
    });

    it('THEN the actualized title is shown in a H2 tag', () => {
      // Assert
      const actual = nativeEl.querySelector('h2')?.textContent;
      const expected = 'Changed after initialization';
      expect(actual).toEqual(expected);
    });
  });
});
