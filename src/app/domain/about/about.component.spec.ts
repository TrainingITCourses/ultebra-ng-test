// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { UiModule } from 'src/app/shared/ui/ui.module';
import { AboutComponent } from './about.component';

// 4 - S.U.T. COMPONENT WITHOUT dependencies
// Test like any other TypeScript class

fdescribe('The About Component', () => {
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

// fdescribe('GIVEN: the AboutComponent in a TesBed', () => {
//   let component: AboutComponent;
//   let fixture: ComponentFixture<AboutComponent>;
//   beforeEach(async () => {
//     // Arrange
//     await TestBed.configureTestingModule({
//       imports: [UiModule], // lo necesitamos para la vista
//       declarations: [AboutComponent],
//       providers: [],
//     }).compileComponents();
//   });
//   describe('WHEN ask for title at the view', () => {
//     beforeEach(() => {
//       fixture = TestBed.createComponent(AboutComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges(); // simulación del comportamiento
//     });
//     it('THEN should show Angular Budget', () => {
//       // Act
//       const actual = component.title;
//       // Assert
//       const expected = 'Angular Budget';
//       expect(actual).toEqual(expected);
//     });
//   });
// });
