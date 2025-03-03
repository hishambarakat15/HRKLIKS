import { Component } from '@angular/core';
import { WhyHrklixComponent } from "../why-hrklix/why-hrklix.component";
import { ServiceComponent } from "../service/service.component";
import { OurSoftwareComponent } from "../our-software/our-software.component";
import { MobilAppComponent } from "../mobil-app/mobil-app.component";
import { ActionsComponent } from "../actions/actions.component";
import { ClientsComponent } from "../clients/clients.component";
import { CompaniesComponent } from "../companies/companies.component";
import { PricingComponent } from "../pricing/pricing.component";
import { VidieoComponent } from "../video/vidieo.component";
import { VideoComponent } from "../video/video.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WhyHrklixComponent, ServiceComponent, OurSoftwareComponent, MobilAppComponent, ActionsComponent, ClientsComponent, CompaniesComponent, PricingComponent, ContactUsComponent,TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
