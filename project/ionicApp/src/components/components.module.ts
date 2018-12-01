import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';



@NgModule({
	declarations: [AComponent],
	imports: [BrowserModule,
		IonicModule.forRoot(ComponentsModule)
	],
	exports: [AComponent]
})
export class ComponentsModule {}
