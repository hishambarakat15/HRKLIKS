import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [TranslateModule,NgFor,FormsModule,RouterLink ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  employeeCount: number = 12;
  currentCycle: string = 'monthly';
  cycles = ['monthly', 'annual', 'quarterly'];

  pricingPlans = [
    {
      id: 'freemium',
      name: 'Freemium',
      basePrice: 0,
      minEmployees: 1,
      maxEmployees: 12,
      features: ['ATS', 'ESS-mobile App', 'Payroll', 'Vacations', 'Attendance', 'Employee Profile', 'CMS', 'Reports', 'Performance']
    },
    {
      id: 'starter',
      name: 'Starter',
      basePrice: 40,
      minEmployees: 13,
      maxEmployees: 50,
      features: ['ATS', 'ESS-mobile App', 'Payroll', 'Vacations', 'Attendance', 'Employee Profile', 'CMS', 'Reports', 'Performance'],
      discounts: { quarterly: 0.9, annual: 0.75 }
    },
    {
      id: 'medium',
      name: 'Medium',
      basePrice: 35,
      minEmployees: 51,
      maxEmployees: 100,
      features: ['ATS', 'ESS-mobile App', 'Payroll', 'Vacations', 'Attendance', 'Employee Profile', 'CMS', 'Reports', 'Performance'],
      discounts: { quarterly: 0.9, annual: 0.75 }
    },
    {
      id: 'premium',
      name: 'Premium',
      basePrice: 25,
      minEmployees: 101,
      maxEmployees: 250,
      features: ['ATS', 'ESS-mobile App', 'Payroll', 'Vacations', 'Attendance', 'Employee Profile', 'CMS', 'Reports', 'Performance'],
      discounts: { quarterly: 0.9, annual: 0.75 }
    }
  ];

  setCycle(cycle: string) {
    this.currentCycle = cycle;
    this.updatePricing();
  }

  getPlanPrice(plan: any): string {
    let basePrice = plan.basePrice;
    if (this.currentCycle === 'quarterly' && plan.discounts) {
      basePrice *= plan.discounts.quarterly;
    } else if (this.currentCycle === 'annual' && plan.discounts) {
      basePrice *= plan.discounts.annual;
    }
    return basePrice === 0 ? 'Free' : `${basePrice.toFixed(2)} EGP ${this.currentCycle}`;
  }

  isActivePlan(plan: any): boolean {
    return this.employeeCount >= plan.minEmployees && this.employeeCount <= plan.maxEmployees;
  }

  updatePricing() {
    // This function can handle additional logic if needed
  }
  
}
