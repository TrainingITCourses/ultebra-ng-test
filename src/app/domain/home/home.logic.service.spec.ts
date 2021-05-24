import { HomeLogicService } from './home.logic.service';
import { Task } from './models/task';
import { TasksView } from './models/tasksView';

// describe('Home.LogicService', () => {
//   let service: HomeLogicService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(HomeLogicService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

fdescribe('Home Logic Service', () => {
  describe('GIVEN: a composeTasksView method ', () => {
    let sut: HomeLogicService;
    beforeEach(() => {
      // Arrange
      sut = new HomeLogicService();
    });
    describe('WHEN called with an empty array', () => {
      let inputTasks: Task[];
      beforeEach(() => {
        inputTasks = [];
      });
      it('THEN should return a view with ceros', () => {
        // Act
        const actual = sut.composeTasksView(inputTasks);
        // Assert
        const expected: TasksView = { total: 0, pending: 0 };
        expect(actual).toEqual(expected);
      });
    });
    describe('WHEN called with one pending task', () => {
      let inputTasks: Task[];
      beforeEach(() => {
        inputTasks = [{ id: '', projectId: '', title: '', done: false }];
      });
      it('THEN should return a view with ones', () => {
        // Act
        const actual = sut.composeTasksView(inputTasks);
        // Assert
        const expected: TasksView = { total: 1, pending: 1 };
        expect(actual).toEqual(expected);
      });
    });
    describe('WHEN called with one done task', () => {
      let inputTasks: Task[];
      beforeEach(() => {
        inputTasks = [{ id: '', projectId: '', title: '', done: true }];
      });
      it('THEN should return a view with one and cero', () => {
        // Act
        const actual = sut.composeTasksView(inputTasks);
        // Assert
        const expected: TasksView = { total: 1, pending: 0 };
        expect(actual).toEqual(expected);
      });
    });
    describe('WHEN called with one done task and two undone', () => {
      let inputTasks: Task[];
      beforeEach(() => {
        inputTasks = [
          { id: '', projectId: '', title: '', done: true },
          { id: '', projectId: '', title: '', done: false },
          { id: '', projectId: '', title: '', done: false },
        ];
      });
      it('THEN should return a view with three and one', () => {
        // Act
        const actual = sut.composeTasksView(inputTasks);
        // Assert
        const expected: TasksView = { total: 3, pending: 2 };
        expect(actual).toEqual(expected);
      });
    });
  });
});
