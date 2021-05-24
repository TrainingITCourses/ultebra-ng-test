import { TestBed } from '@angular/core/testing';

import { Home.LogicService } from './home.logic.service';

describe('Home.LogicService', () => {
  let service: Home.LogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Home.LogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
