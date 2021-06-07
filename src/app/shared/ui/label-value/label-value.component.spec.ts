import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LabelValueComponent } from './label-value.component';

fdescribe('GIVEN the LabelValueComponent', () => {
  let component: FakeParentComponent;
  let fixture: ComponentFixture<FakeParentComponent>;
  let debugEl: DebugElement;
  let nativeEl: HTMLElement;

  @Component({
    selector: 'ab-fake-parent',
    template: '<ab-label-value isOk="true"></ab-label-value>',
  })
  class FakeParentComponent {}

  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      declarations: [FakeParentComponent, LabelValueComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(FakeParentComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    nativeEl = fixture.nativeElement;
  });
  describe('WHEN receives an isOk true', () => {
    beforeEach(() => {
      // Act
      fixture.detectChanges();
    });

    it('THEN applies the .ok css class', () => {
      // Act
      const actual = debugEl
        .query(By.directive(LabelValueComponent))
        .queryAll(By.css('.ok')).length;
      // Assert
      const expected = 1;
      expect(actual).toEqual(expected);
    });
  });
});
