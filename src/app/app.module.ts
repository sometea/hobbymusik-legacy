import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticpageComponent } from './staticpage/staticpage.component';
import { PostsComponent } from './posts/posts.component';
import { ReleasesComponent } from './releases/releases.component';
import { ReleaseComponent } from './release/release.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticpageComponent,
    PostsComponent,
    ReleasesComponent,
    ReleaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
