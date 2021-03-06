import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Project } from '../../core/models/project';
import { Status } from '../../core/models/status';
import { HomeDataService } from './home.data.service';

// 3 - S.U.T. WITH DATA dependencies
// Test collaboration with spies
// Test functionality with stubs

describe('The Home Data Service', () => {
  describe('GIVEN: the GetProjects$', () => {
    let sut: HomeDataService;
    let httpClientStub: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
      // Arrange
      httpClientStub = jasmine.createSpyObj('HttpClient', {
        get: of([
          {
            id: 'mi-primer-proyecto',
            title: 'Mi primer proyecto',
            description:
              'Este es un proyecto de prueba. Para ver de qué soy capaz.',
            budget: 1000,
            status: Status.InProgress,
          },
          {
            id: 'el-super-proyecto',
            title: 'El super proyecto',
            description:
              'Ahora ya me he lanzado y voy con más confianza y recursos.',
            budget: 9000,
            status: Status.InProgress,
          },
        ]),
      });
      sut = new HomeDataService(httpClientStub);
    });
    describe('WHEN called', () => {
      beforeEach(() => {
        // Act
        sut.getProjects$().subscribe();
      });
      it('THEN should use the expected url', () => {
        // Assert
        const actual = httpClientStub.get.calls.mostRecent().args[0];
        const expected = 'https://api-base-21.herokuapp.com/api/pub/projects';
        expect(actual).toEqual(expected);
      });
    });
    describe('WHEN receives data ', () => {
      beforeEach(() => {});
      it('THEN should return the expected data', () => {
        let actual: Project[] = [];
        sut.getProjects$().subscribe({
          next: (data) => (actual = data),
        });
        const expected: Project[] = [
          {
            id: 'mi-primer-proyecto',
            title: 'Mi primer proyecto',
            description:
              'Este es un proyecto de prueba. Para ver de qué soy capaz.',
            budget: 1000,
            status: Status.InProgress,
          },
          {
            id: 'el-super-proyecto',
            title: 'El super proyecto',
            description:
              'Ahora ya me he lanzado y voy con más confianza y recursos.',
            budget: 9000,
            status: Status.InProgress,
          },
        ];
        expect(actual).toEqual(expected);
      });
    });
  });
});
