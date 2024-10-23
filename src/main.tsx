import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Container } from 'inversify'
import { Cart, ICart } from './Cart.tsx'
import { TYPES } from './types.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Main.ts
const container = new Container();

//container.bind<ICondimentService>(TYPES.CondimentService).to(CondimentService);
//container.bind<IDiscountService>(TYPES.DiscountService).to(DiscountService);
container.bind<ICart>(TYPES.Cart).to(Cart);

export { container };
