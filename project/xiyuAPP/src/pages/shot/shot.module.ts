import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShotPage } from './shot';

@NgModule({
  declarations: [
    ShotPage,
  ],
  imports: [
    IonicPageModule.forChild(ShotPage),
  ],
})
export class ShotPageModule {}
