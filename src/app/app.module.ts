import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavigationComponent }  from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent} from './components/carousel/carousel.component';
import { SignInFormComponent } from './components/signin-form/signin-form.component';
import { BodyContainerComponent } from './components/body-container/body-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    SignInFormComponent,
    CarouselComponent,
    BodyContainerComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
