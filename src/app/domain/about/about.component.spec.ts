import { Component, DebugElement } from '@angular/core';
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

@Component({
  selector: 'ab-page',
  template: `<ng-content></ng-content>`,
})
class FakePageTemplate {}

fdescribe('GIVEN the AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;

  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      declarations: [AboutComponent, FakePageTemplate],
      // imports: [UiModule],
      // schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = fixture.nativeElement;
  });
  describe('WHEN is title is auto initialized ', () => {
    beforeEach(() => {
      // Act
      fixture.detectChanges();
    });

    it('THEN the title sould be shown in upprecase in a H2 tag  ', () => {
      // Act
      const actual = nativeEl.querySelector('h2')?.textContent;
      // Assert
      const expected = 'ANGULAR BUDGET';
      expect(actual).toEqual(expected);

      // alternativa
      const actual2 = debugEl.query(By.css('h2')).nativeElement.textContent;
      expect(actual2).toEqual(expected);
    });
  });
  describe('WHEN is title property is changed ', () => {
    beforeEach(() => {
      // Act
      component.title = 'Ultebra';
      fixture.detectChanges();
    });

    it('THEN the view title sould be shown change also  ', () => {
      const actual = nativeEl.querySelector('h2')?.textContent;
      console.log(component.title);
      // Assert
      const expected = 'ULTEBRA';
      expect(actual).toEqual(expected);
    });
  });
});
