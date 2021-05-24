import { TestBed } from '@angular/core/testing';
import { HomeDataService } from './home.data.service';

describe('Home.DataService', () => {
  let service: HomeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
