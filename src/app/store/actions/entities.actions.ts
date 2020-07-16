import { createAction, props } from '@ngrx/store';
import { Entity } from 'src/app/models/entities.interface';

export enum EntityActionTypes {
  LoadEntities = '[Entity] Load Entities',
  LoadEntitiesSuccess = '[Entity] Load Entities Success',
  LoadEntitiesFail = '[Entity] Load Entities Fail'
}

export const loadEntities = createAction(
  EntityActionTypes.LoadEntities
);

export const loadEntitiessSuccess = createAction(
  EntityActionTypes.LoadEntitiesSuccess,
  props<{ data: Entity[] }>()
);

export const loadEntitiessFailure = createAction(
  EntityActionTypes.LoadEntitiesFail,
  props<{ error: Error | any }>()
);

export const fromEntityActions = {
  loadEntities,
  loadEntitiessFailure,
  loadEntitiessSuccess
};
