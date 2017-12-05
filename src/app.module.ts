import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeadComponent } from './app.header';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeadComponent],
  bootstrap: [AppComponent, HeadComponent]
})

export class AppModule {}
