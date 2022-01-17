import { TestBed } from '@angular/core/testing';

import { StudentsAPIService } from './students-api.service';

describe('StudentsAPIService', () => {
  let service: StudentsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
