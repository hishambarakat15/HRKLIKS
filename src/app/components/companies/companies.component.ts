import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [TranslateModule,NgFor],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {
  companies = [
    { url: 'https://deroosak.com/', image: './assets/images/companies/deroosak.jpeg', alt: 'deroosak' },
    { url: 'https://egyptfoodsgroup.com/', image: './assets/images/companies/egypt food.jpeg', alt: 'egypt food' },
    { url: 'https://www.ehaf.com/', image: './assets/images/companies/Ehaf.jpeg', alt: 'Ehaf' },
    { url: 'https://www.myvoo.app/', image: './assets/images/companies/voo.jpeg', alt: 'voo' },
    { url: 'https://wagadtoha.com/ar/business/zabthacom', image: './assets/images/companies/zabatha.jpeg', alt: 'zabatha' },
    { url: 'https://www.albawatches.com/', image: './assets/images/companies/alba.jpeg', alt: 'alba' },
    { url: 'https://www.appseconnect.com/dynamics-link/', image: './assets/images/companies/dynamics.jpeg', alt: 'dynamics' },
    { url: 'https://www.chemipharm.net/', image: './assets/images/companies/chemipharn2.jpeg', alt: 'chemipharn2' },
    { url: 'https://zulficarpartners.com/', image: './assets/images/companies/zulfacar.jpeg', alt: 'zulfacar' },
    { url: 'https://www.weds.co.jp/english/kranze/', image: './assets/images/companies/weds.jpeg', alt: 'weds' },
    { url: 'https://www.afreximbank.com/', image: './assets/images/companies/AFIXM.jpg', alt: 'AFIXM' },
    { url: 'https://www.ennabigrill.com/', image: './assets/images/companies/ephedra.jpeg', alt: 'ephedra' },
  ];

}
