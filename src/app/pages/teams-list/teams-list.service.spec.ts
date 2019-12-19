import { TestBed } from '@angular/core/testing';

import { TeamsListService } from './teams-list.service';

describe('TeamsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamsListService = TestBed.get(TeamsListService);
    expect(service).toBeTruthy();
  });
});
