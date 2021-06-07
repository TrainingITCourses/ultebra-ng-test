import { Title } from '@angular/platform-browser';
import { UtilService } from './util.service';

// 2 - S.U.T. WITH dependencies
// Test collaboration with spies

fdescribe('The Utils service', () => {
  describe('GIVEN: the setDocumentTitle ', () => {
    let sut: UtilService;
    let titleServiceSpy: jasmine.SpyObj<Title>;
    beforeEach(() => {
      // Arrange
      titleServiceSpy = jasmine.createSpyObj('TitleService', {
        setTitle: undefined,
      });
      sut = new UtilService(titleServiceSpy);
    });
    describe('WHEN called with a page title', () => {
      beforeEach(() => {
        // Act
        const input = 'Pruebas unitarias con espías';
        sut.setDocumentTitle(input);
      });
      it('THEN should prepend it to the site title', () => {
        // Assert
        const actual = titleServiceSpy.setTitle.calls.mostRecent().args[0];
        const expected = 'Pruebas unitarias con espías | Angular.Budget';
        expect(actual).toEqual(expected);
      });
    });
    describe('WHEN called without a page title', () => {
      beforeEach(() => {
        // Act
        sut.setDocumentTitle();
      });
      it('THEN should prepend use the site title', () => {
        // Assert
        const actual = titleServiceSpy.setTitle.calls.mostRecent().args[0];
        const expected = ' | Angular.Budget';
        expect(actual).toEqual(expected);
      });
    });
  });
});
