import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RecordComponent } from './components/record/record.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { ManifestoComponent } from './components/manifesto/manifesto.component';
import { CompssaComponent } from './components/compssa/compssa.component';
import { PreveiwComponent } from './components/preveiw/preveiw.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "record",
    component: RecordComponent
  },
  {
    path: "achievement",
    component: AchievementComponent
  },
  {
    path: "compssa",
    component: CompssaComponent
  },
  {
    path: "preview",
    component: PreveiwComponent
  },
  {
    path: "manifesto",
    component: ManifestoComponent
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
