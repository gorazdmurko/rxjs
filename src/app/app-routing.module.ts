import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExhaustMapComponent } from './components/exhaust-map/exhaust-map.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import { FlatMapComponent } from './components/flat-map/flat-map.component';
import { PromisesComponent } from './components/observables/promises/promises.component';
import { ObservableComponent } from './components/observables/observable/observable.component';
import { SubjectComponent } from './components/observables/subject/subject.component';
import { BehaviourSubjectComponent } from './components/observables/behaviourSubject/behaviour-subject.component';
import { AsyncSubjectComponent } from './components/observables/asyncSubject/async-subject.component';
import { ReplaySubjectComponent } from './components/observables/replaySubject/replay-subject.component';
import { ShareReplayComponent } from './components/observables/shareReplay/share-replay.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "mergeMap", component: MergeMapComponent },
  { path: "switchMap", component: SwitchMapComponent },
  { path: "concatMap", component: ConcatMapComponent },
  { path: "exhaustMap", component: ExhaustMapComponent },
  { path: "flatMap", component: FlatMapComponent },
  // observables
  { path: "observable", component: ObservableComponent },
  { path: "promiseVsObservable", component: PromisesComponent },
  { path: "subjects", component: SubjectComponent },
  { path: "behaviourSubject", component: BehaviourSubjectComponent },
  { path: "asyncSubject", component: AsyncSubjectComponent },
  { path: "replaySubject", component: ReplaySubjectComponent },
  { path: "shareReplay", component: ShareReplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
