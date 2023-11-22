import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RecordComponent } from './components/record/record.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { ConnectComponent } from './components/connect/connect.component';

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
    path: "connect",
    component: ConnectComponent
  },
  {
    path: "manifesto",
    component: ConnectComponent
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
