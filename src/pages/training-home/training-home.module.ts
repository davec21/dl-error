import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingHomePage } from './training-home';

@NgModule({
  declarations: [
    TrainingHomePage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingHomePage),
  ],
})
export class TrainingHomePageModule {}
