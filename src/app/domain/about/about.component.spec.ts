import { AboutComponent } from './about.component';

fdescribe('The About Component', () => {
  describe('GIVEN: an instance of the controller', () => {
    let sut = new AboutComponent();
    let input = null;
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

// describe('Lo que voy a probar', () => {
//   describe('GIVEN: situación del escenario', () => {
//     let sut = null;
//     let input = null;
//     let actual = null;
//     beforeEach(() => {
//     });
//     describe('WHEN actuación del programador', () => {
//       beforeEach(() => {
//       });
//       it('THEN should expectativa', () => {
//         const expected= null;
//         expect(actual).toEqual(expected);
//       });
//     });
//   });
// });
