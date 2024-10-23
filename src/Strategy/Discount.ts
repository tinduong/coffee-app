export interface DiscountStrategy {
    calculateDiscountedCost(baseCost: number): number;
}

export class NoDiscountStrategy implements DiscountStrategy {
    calculateDiscountedCost(baseCost: number): number {
        return baseCost;
    }
}

export class KidDiscountStrategy implements DiscountStrategy {
    calculateDiscountedCost(baseCost: number): number {
        return baseCost * 0.5; // 50% discount for kids
    }
}

export class VeteranDiscountStrategy implements DiscountStrategy {
    calculateDiscountedCost(baseCost: number): number {
        return baseCost * 0.7; // 30% discount for veterans
    }
}

export class SeniorDiscountStrategy implements DiscountStrategy {
    calculateDiscountedCost(baseCost: number): number {
        return baseCost * 0.8; // 20% discount for seniors
    }
}

export class GoldMembershipDiscountStrategy implements DiscountStrategy {
    calculateDiscountedCost(baseCost: number): number {
        return baseCost * 0.6; // 40% discount for gold members
    }
}

export class SilverMembershipDiscountStrategy implements DiscountStrategy {
    calculateDiscountedCost(baseCost: number): number {
        return baseCost * 0.9; // 10% discount for silver members
    }
}