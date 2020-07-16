import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EntitiesEffects } from './entities.effects';

describe('EntitiesEffects', () => {
  let actions$: Observable<any>;
  let effects: EntitiesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EntitiesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(EntitiesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
