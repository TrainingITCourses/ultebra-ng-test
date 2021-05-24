// describe('AboutComponent', () => {
//   let component: AboutComponent;
//   let fixture: ComponentFixture<AboutComponent>;

import { AboutComponent } from './about.component';

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ AboutComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AboutComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

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

// fdescribe('GIVEN: the AboutComponent in a TesBed', () => {
//   let component: AboutComponent;
//   let fixture: ComponentFixture<AboutComponent>;
//   beforeEach(async () => {
//     // Arrange
//     await TestBed.configureTestingModule({
//       imports: [UiModule], // lo necesitamos para la vista
//       declarations: [AboutComponent],
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
