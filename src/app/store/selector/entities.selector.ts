import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, adapter, entitiesFeatureKey } from '../reducer/entities.reducer';

// Lookup the 'Entity' feature state managed by NgRx
const getEntityState = createFeatureSelector<State>(entitiesFeatureKey);

// get the selectors
const { selectIds, selectAll, selectTotal } = adapter.getSelectors();

// select the array of Entity ids
export const selectEntityIds = createSelector(
  getEntityState,
  selectIds
);

// select the array of Entitys
export const selectAllEntities = createSelector(
  getEntityState,
  selectAll
);

// select the total Entity count
export const selectEntityCount = createSelector(
  getEntityState,
  selectTotal
);

// select entity loaded flag
export const selectEntityLoaded = createSelector(
  getEntityState,
  state => state.loaded
);

// select entity error
export const selectError = createSelector(
  getEntityState,
  state => state.error
);
