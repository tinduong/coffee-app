import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SimpleCoffee, MilkDecorator, SugarDecorator } from './Coffee.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Main.ts


let coffee = new SimpleCoffee();
console.log(coffee.getDescription()); // Coffee
console.log(coffee.cost()); // 5

coffee = new MilkDecorator(coffee);
console.log(coffee.getDescription()); // Coffee + Milk
console.log(coffee.cost()); // 6

coffee = new SugarDecorator(coffee);
console.log(coffee.getDescription()); // Coffee + Milk + Sugar
console.log(coffee.cost()); // 6.5