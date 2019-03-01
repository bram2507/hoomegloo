import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubscribePage } from './subscribe';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [SubscribePage ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [IonicPageModule.forChild(SubscribePage), CommonModule ],
})
export class SubscribePageModule {}
export class Profile{}