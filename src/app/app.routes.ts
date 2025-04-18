import { Routes } from '@angular/router';
import { ArabicComponent } from './components/arabic/arabic.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { LiveDemoComponent } from './components/live-demo/live-demo.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OurSoftwareComponent } from './components/our-software/our-software.component';
import { ServiceComponent } from './components/service/service.component';
import { WhyHrklixComponent } from './components/why-hrklix/why-hrklix.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'OurSoftware', component: OurSoftwareComponent },
  { path: 'Service', component: ServiceComponent },
  { path: 'WhyHrklix', component: WhyHrklixComponent },
  { path: 'Arabic', component: ArabicComponent },
  { path: 'LiveDemo', component: LiveDemoComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'LogIn', component: LogInComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },

  { path: '**', component: NotFoundComponent },
];
