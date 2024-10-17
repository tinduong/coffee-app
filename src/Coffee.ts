// Coffee.ts
export interface Coffee {
    getDescription(): string;
    cost(): number;
}

export class SimpleCoffee implements Coffee {
    getDescription(): string {
        return 'Coffee';
    }

    cost(): number {
        return 5; // base cost of coffee
    }
}


export abstract class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;

    constructor(decoratedCoffee: Coffee) {
        this.decoratedCoffee = decoratedCoffee;
    }

    getDescription(): string {
        return this.decoratedCoffee.getDescription();
    }

    cost(): number {
        return this.decoratedCoffee.cost();
    }
}


// MilkDecorator.ts

export class MilkDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${super.getDescription()} + Milk`;
  }

  cost(): number {
    return super.cost() + 1; // cost of milk
  }
}

// SugarDecorator.ts

export class SugarDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${super.getDescription()} + Sugar`;
  }

  cost(): number {
    return super.cost() + 0.5; // cost of sugar
  }
}