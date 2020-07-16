import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { fromEntityActions } from '../actions/entities.actions';
import { EntityService } from 'src/app/service/entity.service';

@Injectable()
export class EntitiesEffects {



  constructor(private actions$: Actions, private entityService: EntityService) {}

  loadEntities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromEntityActions.loadEntities),
      switchMap(() =>
        this.entityService.getEntities().pipe(
          map((res: any) =>
            fromEntityActions.loadEntitiessSuccess({
              data: res.data
            })
          ),
          catchError(error =>
            of(
              fromEntityActions.loadEntitiessFailure({
                error
              })
            )
          )
        )
      )
    )
  );


}
