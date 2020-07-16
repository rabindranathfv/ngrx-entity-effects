import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Entity } from 'src/app/models/entities.interface';
import { fromEntityActions } from '../actions/entities.actions';

export const entitiesFeatureKey = 'entities';

export interface State extends EntityState<Entity> {
  loaded: boolean;
  error?: Error | any;
}

export const adapter: EntityAdapter<Entity> = createEntityAdapter<Entity>({
  // In this case this would be optional since primary key is id
  selectId: item => item.id
});

export interface EntityPartialState {
  readonly [entitiesFeatureKey]: State;
}

export const initialState: State = adapter.getInitialState({
  // Additional entity state properties
  loaded: false,
  error: null
});


export const reducerEntity = createReducer(
  initialState,
  on(fromEntityActions.loadEntitiessSuccess, (state, { data }) => {
    return adapter.addAll(data, {
      ...state,
      loaded: true
    });
  }),
  on(fromEntityActions.loadEntitiessFailure, (state, { error }) => {
    return {
      ...state,
      error
    };
  }),
  on(fromEntityActions.loadEntitiessSuccess, (state, { id, item }) => {
    return adapter.addOne(item, state);
  }),
  on(fromEntityActions.loadEntitiessFailure, (state, { error }) => {
    return {
      ...state,
      error
    };
  })
);

export function ReducerEntity(state: State | undefined, action: Action) {
  return reducerEntity(state, action);
}

