import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { LocalstorageService }  from "./services/localstorage.service";
import { HttpClientModule } from '@angular/common/http';
import { Child2Component } from './components/child2/child2.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
   
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
