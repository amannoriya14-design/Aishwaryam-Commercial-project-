/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  spaceType: 'office' | 'retail' | 'both' | '';
  interestType: 'site_visit' | 'pricing' | 'brochure' | 'general';
  preferredDate?: string;
  preferredTime?: string;
  comments?: string;
}

export interface InvestmentCalculatorInput {
  spaceType: 'office' | 'retail';
  sizeSqFt: number;
  ratePerSqFt: number; // e.g., 7500 for office, 12500 for retail
  loanPercentage: number; // 0 to 80%
  expectedRentPerSqFt: number; // e.g., 45 for office, 90 for retail
}

export interface InvestmentCalculatorOutput {
  totalCost: number;
  loanAmount: number;
  ownInvestment: number;
  monthlyEMI: number;
  annualRentalIncome: number;
  grossRentalYield: number;
  netMonthlyCashflow: number;
}
