import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { TheatreFrontendModule } from './theatreFrontend/theatreFrontend.module';
import { UserregistrationModule } from './user-registration/user-registration.module';
import { LoginauthenticationModule } from './loginauthentication/loginauthentication.module';
import { MainLandingModule } from './main-landing-page/main-landing-page.module';
import { DistributorAppModule } from './distributorFrontend/distributorApp.module';
import { ShowuiModule } from './showui/showui.module';
import { LandingModule } from './landingpage/landingpage.module';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'theatre',
    loadChildren: () => TheatreFrontendModule,
  },
  {
    path: 'landing',
    loadChildren: () => LandingModule,
  },
  {
    path: 'userregistration',
    loadChildren: () => UserregistrationModule,
  },
  {
    path: 'distributors',
    loadChildren: () => DistributorAppModule,
  }, 
  {
    path: 'mainlanding',
    loadChildren: () => MainLandingModule,
  },
  {
    path: 'login',
    loadChildren: () => LoginauthenticationModule,
  },
  {
    path: 'show',
    loadChildren: () => ShowuiModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
