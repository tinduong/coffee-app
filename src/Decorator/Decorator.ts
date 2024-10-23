import { CoffeeDecorator } from "./Coffee";


export class MilkDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${super.getDescription()} + Milk`;
  }

  cost(): number {
    return super.cost() + 1; // cost of milk
  }
}

export class SugarDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${super.getDescription()} + Sugar`;
  }

  cost(): number {
    return super.cost() + 0.5; // cost of sugar
  }
}

export class VanillaDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${super.getDescription()} + Vanilla`;
  }

  cost(): number {
    return super.cost() + 0.75; // cost of vanilla
  }
}

export class CaramelDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${super.getDescription()} + Caramel`;
  }

  cost(): number {
    return super.cost() + 0.75; // cost of caramel
  }
}

export class WhippedCreamDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${super.getDescription()} + Whipped Cream`;
  }

  cost(): number {
    return super.cost() + 0.5; // cost of whipped cream
  }
}

export class ChocolateDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${super.getDescription()} + Chocolate`;
  }

  cost(): number {
    return super.cost() + 0.75; // cost of chocolate
  }
}

export class CinnamonDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${super.getDescription()} + Cinnamon`;
  }

  cost(): number {
    return super.cost() + 0.5; // cost of cinnamon
  }
}

export class HazelnutDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${super.getDescription()} + Hazelnut`;
  }

  cost(): number {
    return super.cost() + 0.75; // cost of hazelnut
  }
}

export class AlmondMilkDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${super.getDescription()} + Almond Milk`;
  }

  cost(): number {
    return super.cost() + 1; // cost of almond milk
  }
}

export class SoyMilkDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${super.getDescription()} + Soy Milk`;
  }

  cost(): number {
    return super.cost() + 1; // cost of soy milk
  }
}

export class MochaDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${super.getDescription()} + Mocha`;
  }

  cost(): number {
    return super.cost() + 0.75; // cost of mocha
  }
}

export class IrishCreamDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${super.getDescription()} + Irish Cream`;
  }

  cost(): number {
    return super.cost() + 1; // cost of Irish cream
  }
}