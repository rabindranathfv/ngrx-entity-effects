import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

// ang in memory
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './fakeApi/data.service';

// services
import { PolicyService } from './service/policy.service';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { PolicyCreateComponent } from './components/policy-create/policy-create.component';
import { EntitiesEffects } from './store/effect/entities.effects';

@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent,
    PolicyCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forFeature([EntitiesEffects])
  ],
  providers: [ DataService, PolicyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
