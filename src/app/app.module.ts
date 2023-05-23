import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { ExhaustMapComponent } from './components/exhaust-map/exhaust-map.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FlatMapComponent } from './components/flat-map/flat-map.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './components/observables/observable/observable.component';
import { PromisesComponent } from './components/observables/promises/promises.component';
import { SubjectComponent } from './components/observables/subject/subject.component';
import { AsyncSubjectComponent } from './components/observables/asyncSubject/async-subject.component';
import { ReplaySubjectComponent } from './components/observables/replaySubject/replay-subject.component';
import { BehaviourSubjectComponent } from './components/observables/behaviourSubject/behaviour-subject.component';
import { NotificationService } from './services/notification.service';
import { UiService } from './services/ui.service';
import { CountryService } from './services/country.service';
import { ShareReplayComponent } from './components/observables/shareReplay/share-replay.component';

@NgModule({
  declarations: [
    AppComponent,
    MergeMapComponent,
    SwitchMapComponent,
    ConcatMapComponent,
    ExhaustMapComponent,
    HomeComponent,
    FlatMapComponent,
    DropdownDirective,
    // observables
    ObservableComponent,
    PromisesComponent,
    SubjectComponent,
    BehaviourSubjectComponent,
    AsyncSubjectComponent,
    ReplaySubjectComponent,
    ShareReplayComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
  ],
  providers: [
    NotificationService,
    UiService,
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
