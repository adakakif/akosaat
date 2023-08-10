import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { watchesResolver } from './watches.resolver';

describe('watchesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => watchesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
