import { Title } from '@angular/platform-browser';
import { UtilService } from './util.service';

// describe('UtilService', () => {
//   let service: UtilService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(UtilService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

fdescribe('The Utils service', () => {
  describe('GIVEN: the setDocumentTitle ', () => {
    let sut: UtilService;
    let titleServiceSpy: jasmine.SpyObj<Title>;
    beforeEach(() => {
      titleServiceSpy = jasmine.createSpyObj('TitleService', {
        setTitle: undefined,
      });
      sut = new UtilService(titleServiceSpy);
    });
    describe('WHEN called with a page title', () => {
      beforeEach(() => {
        const input = 'Pruebas unitarias con espías';
        sut.setDocumentTitle(input);
      });
      it('THEN should prepend it to the site title', () => {
        const actual = titleServiceSpy.setTitle.calls.mostRecent().args[0];
        const expected = 'Pruebas unitarias con espías | Angular.Budget';
        expect(actual).toEqual(expected);
      });
    });
    describe('WHEN called without a page title', () => {
      beforeEach(() => {
        sut.setDocumentTitle();
      });
      it('THEN should prepend use the site title', () => {
        const actual = titleServiceSpy.setTitle.calls.mostRecent().args[0];
        const expected = ' | Angular.Budget';
        expect(actual).toEqual(expected);
      });
    });
  });
});
