import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { HomeDataService } from './home.data.service';

// describe('Home.DataService', () => {
//   let service: HomeDataService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(HomeDataService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

fdescribe('The Home Data Service', () => {
  describe('GIVEN: the GetProjects$', () => {
    let sut: HomeDataService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', {
        get: EMPTY,
      });
      sut = new HomeDataService(httpClientSpy);
    });
    describe('WHEN called and subscribed', () => {
      beforeEach(() => {
        sut.getProjects$().subscribe();
      });
      it('THEN should use the expected url', () => {
        const actual = httpClientSpy.get.calls.mostRecent().args[0];
        const expected = 'https://api-base-21.herokuapp.com/api/pub/projects';
        expect(actual).toEqual(expected);
      });
    });
  });
});
