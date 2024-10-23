
export class AppleApi {
  /**
   *
   */
  constructor() {
    // code here
  }
  makePayment() {
    console.log("Apple Api payment");
  }
}

export class DiscoverCardApi {
  /**
   *
   */
  constructor() {
    // code here
  }
  makePayment() {
    console.log("Discover Card Api payment");
  }
}

export class PayPalApi {
  constructor() {
    // code here
  }
  makePayment() {
    console.log("PayPal Api payment");
  }
}

import { injectable } from 'inversify';

export interface ICart {
  processPayment(paymentMethod: string): unknown;
  getCondiments(): { [key: string]: number };
  incrementCondiment(condiment: string): void;
  decrementCondiment(condiment: string): void;
  calculateCost(discountType: string): number;
  getDescription(): string;
}

@injectable()
export class Cart implements ICart {
  
  private condiments: { [key: string]: number } = {
    milk: 0,
    sugar: 0,
    vanilla: 0,
    caramel: 0,
    whippedCream: 0,
    chocolate: 0,
    cinnamon: 0,
    hazelnut: 0,
    almondMilk: 0,
    soyMilk: 0,
    mocha: 0,
    irishCream: 0,
  };

  getCondiments() {
    return this.condiments;
  }

  incrementCondiment(condiment: string) {
    if (this.condiments[condiment] !== undefined) {
      this.condiments[condiment]++;
    }
  }

  decrementCondiment(condiment: string) {
    if (this.condiments[condiment] !== undefined && this.condiments[condiment] > 0) {
      this.condiments[condiment]--;
    }
  }

  calculateCost(discountType: string): number {
    let cost = 5; // Base cost of coffee
    cost += this.condiments.milk * 1;
    cost += this.condiments.sugar * 0.5;
    cost += this.condiments.vanilla * 0.75;
    cost += this.condiments.caramel * 0.75;
    cost += this.condiments.whippedCream * 1.25;
    cost += this.condiments.chocolate * 1.5;
    cost += this.condiments.cinnamon * 0.5;
    cost += this.condiments.hazelnut * 1;
    cost += this.condiments.almondMilk * 1;
    cost += this.condiments.soyMilk * 1;
    cost += this.condiments.mocha * 1.5;
    cost += this.condiments.irishCream * 1.75;

    switch (discountType) {
      case 'kid':
        return cost * 0.5;
      case 'veteran':
        return cost * 0.7;
      case 'senior':
        return cost * 0.8;
      case 'gold':
        return cost * 0.6;
      case 'silver':
        return cost * 0.9;
      default:
        return cost;
    }
  }

  getDescription(): string {
    const descriptions = [];
    if (this.condiments.milk > 0) descriptions.push(`Milk (${this.condiments.milk})`);
    if (this.condiments.sugar > 0) descriptions.push(`Sugar (${this.condiments.sugar})`);
    if (this.condiments.vanilla > 0) descriptions.push(`Vanilla (${this.condiments.vanilla})`);
    if (this.condiments.caramel > 0) descriptions.push(`Caramel (${this.condiments.caramel})`);
    if (this.condiments.whippedCream > 0) descriptions.push(`Whipped Cream (${this.condiments.whippedCream})`);
    if (this.condiments.chocolate > 0) descriptions.push(`Chocolate (${this.condiments.chocolate})`);
    if (this.condiments.cinnamon > 0) descriptions.push(`Cinnamon (${this.condiments.cinnamon})`);
    if (this.condiments.hazelnut > 0) descriptions.push(`Hazelnut (${this.condiments.hazelnut})`);
    if (this.condiments.almondMilk > 0) descriptions.push(`Almond Milk (${this.condiments.almondMilk})`);
    if (this.condiments.soyMilk > 0) descriptions.push(`Soy Milk (${this.condiments.soyMilk})`);
    if (this.condiments.mocha > 0) descriptions.push(`Mocha (${this.condiments.mocha})`);
    if (this.condiments.irishCream > 0) descriptions.push(`Irish Cream (${this.condiments.irishCream})`);
    return descriptions.join(', ');
  }

  processPayment(paymentMethod: string) {
    switch (paymentMethod) {
      case 'Cash':
        return 'Cash';
      case 'ApplePay':
        return new AppleApi().makePayment();
      case 'PayPal':
        return new PayPalApi().makePayment();
      case 'DiscoverCard':
        return new DiscoverCardApi().makePayment();
      default:
        return 'Cash';
    }
  }
}