import React, { useState } from 'react';
import './App.css';
import { DiscountStrategy, GoldMembershipDiscountStrategy, KidDiscountStrategy, NoDiscountStrategy, SeniorDiscountStrategy, SilverMembershipDiscountStrategy, VeteranDiscountStrategy } from './Discount';
import { SimpleCoffee, MilkDecorator, SugarDecorator } from './Coffee';
import { VanillaDecorator, CaramelDecorator, WhippedCreamDecorator, ChocolateDecorator, CinnamonDecorator, HazelnutDecorator, AlmondMilkDecorator, SoyMilkDecorator, MochaDecorator, IrishCreamDecorator } from './Decorator';

const App: React.FC = () => {
  const [condiments, setCondiments] = useState({
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
  });

  const [animate, setAnimate] = useState(false);
  const [discountStrategy, setDiscountStrategy] = useState<DiscountStrategy>(new NoDiscountStrategy());

  const incrementCondiment = (condiment: keyof typeof condiments) => {
    setCondiments((prev) => ({
      ...prev,
      [condiment]: prev[condiment] + 1,
    }));
    triggerAnimation();
  };

  const decrementCondiment = (condiment: keyof typeof condiments) => {
    setCondiments((prev) => ({
      ...prev,
      [condiment]: Math.max(prev[condiment] - 1, 0),
    }));
  };

  const triggerAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500); // Reset animation state after 500ms
  };

  let coffee = new SimpleCoffee();
  const condimentsList: string[] = [];

  for (let i = 0; i < condiments.milk; i++) {
    coffee = new MilkDecorator(coffee);
    condimentsList.push('Milk');
  }
  for (let i = 0; i < condiments.sugar; i++) {
    coffee = new SugarDecorator(coffee);
    condimentsList.push('Sugar');
  }
  for (let i = 0; i < condiments.vanilla; i++) {
    coffee = new VanillaDecorator(coffee);
    condimentsList.push('Vanilla');
  }
  for (let i = 0; i < condiments.caramel; i++) {
    coffee = new CaramelDecorator(coffee);
    condimentsList.push('Caramel');
  }
  for (let i = 0; i < condiments.whippedCream; i++) {
    coffee = new WhippedCreamDecorator(coffee);
    condimentsList.push('Whipped Cream');
  }
  for (let i = 0; i < condiments.chocolate; i++) {
    coffee = new ChocolateDecorator(coffee);
    condimentsList.push('Chocolate');
  }
  for (let i = 0; i < condiments.cinnamon; i++) {
    coffee = new CinnamonDecorator(coffee);
    condimentsList.push('Cinnamon');
  }
  for (let i = 0; i < condiments.hazelnut; i++) {
    coffee = new HazelnutDecorator(coffee);
    condimentsList.push('Hazelnut');
  }
  for (let i = 0; i < condiments.almondMilk; i++) {
    coffee = new AlmondMilkDecorator(coffee);
    condimentsList.push('Almond Milk');
  }
  for (let i = 0; i < condiments.soyMilk; i++) {
    coffee = new SoyMilkDecorator(coffee);
    condimentsList.push('Soy Milk');
  }
  for (let i = 0; i < condiments.mocha; i++) {
    coffee = new MochaDecorator(coffee);
    condimentsList.push('Mocha');
  }
  for (let i = 0; i < condiments.irishCream; i++) {
    coffee = new IrishCreamDecorator(coffee);
    condimentsList.push('Irish Cream');
  }

  const discountedCost = discountStrategy.calculateDiscountedCost(coffee.cost());

  return (
    <div className="app">
      <h1>Decorator Pattern with Coffee</h1>
      <div className="content">
        <div className="grid">
          {Object.keys(condiments).map((condiment) => (
            <div key={condiment} className="grid-item">
              <span>{condiment.charAt(0).toUpperCase() + condiment.slice(1)}</span>
              <div className="buttons">
                <button onClick={() => incrementCondiment(condiment as keyof typeof condiments)}>+</button>
                <span>{condiments[condiment as keyof typeof condiments]}</span>
                <button onClick={() => decrementCondiment(condiment as keyof typeof condiments)}>-</button>
              </div>
            </div>
          ))}
        </div>
        {/* This is the comment  */}
        <div className={`coffee-display ${animate ? 'animate' : ''}`}>
          <p>Base: Coffee</p>
          {condimentsList.length > 0 && (
            <div>
              <p>Condiments:</p>
              {condimentsList.map((condiment, index) => (
                <p key={index}>{condiment}</p>
              ))}
            </div>
          )}
          <p>Cost: ${coffee.cost()}</p>
          <p>Discounted Cost: ${discountedCost}</p>
        </div>
      </div>
      <div className="discount-options">
        <button onClick={() => setDiscountStrategy(new NoDiscountStrategy())}>No Discount</button>
        <button onClick={() => setDiscountStrategy(new KidDiscountStrategy())}>Kid Discount</button>
        <button onClick={() => setDiscountStrategy(new VeteranDiscountStrategy())}>Veteran Discount</button>
        <button onClick={() => setDiscountStrategy(new SeniorDiscountStrategy())}>Senior Discount</button>
        <button onClick={() => setDiscountStrategy(new GoldMembershipDiscountStrategy())}>Gold Membership</button>
        <button onClick={() => setDiscountStrategy(new SilverMembershipDiscountStrategy())}>Silver Membership</button>
      </div>
    </div>
  );
};

export default App;