import React, { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Cart, ICart } from "./Cart";
import { container } from "./main";
import { TYPES } from "./types";





const App: React.FC = () => {
  //const [cart] = useState(new Cart());
  const cart = container.get<ICart>(TYPES.Cart);
  const [discountType, setDiscountType] = useState<string>('none');

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
  const [paymentMethod, setPaymentMethod] = useState("Cash");

  const incrementCondiment = (condiment: keyof typeof condiments) => {
    setCondiments((prev) => ({
      ...prev,
      [condiment]: prev[condiment] + 1,
    }));
  };

  const decrementCondiment = (condiment: keyof typeof condiments) => {
    setCondiments((prev) => ({
      ...prev,
      [condiment]: Math.max(prev[condiment] - 1, 0),
    }));
  };

  const calculateCost = () => {
    return cart.calculateCost(discountType);
  };

  const getDescription = () => {
    return cart.getDescription();
  };

  const handleChangePaymentMethod = (value: any) => {
    setPaymentMethod(() => value);
  };

  const processPayment = () => {
    cart.processPayment(paymentMethod);
  };

  return (
    <>
      <Container sx={{ width: "1000px", height: "100vh" }}>
        <Typography variant="h1">STAR COFFEE</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "1rem",
          }}
        >
          <div>
            {Object.keys(condiments).map((condiment) => (
              <div key={condiment}>
                <Stack direction={"column"} spacing={2}>
                  <Stack direction={"row"} spacing={2}>
                    <Button
                      onClick={() =>
                        decrementCondiment(condiment as keyof typeof condiments)
                      }
                    >
                      -
                    </Button>
                    <span>
                      {condiments[condiment as keyof typeof condiments]}{" "}
                      {condiment.charAt(0).toUpperCase() + condiment.slice(1)}
                    </span>
                    <Button
                      onClick={() =>
                        incrementCondiment(condiment as keyof typeof condiments)
                      }
                    >
                      +
                    </Button>
                  </Stack>
                </Stack>
              </div>
            ))}
          </div>
          <div className="coffee-display">
            <p>Base: Coffee</p>
            <p>Condiments: {getDescription()}</p>
          </div>
          <Typography variant="h6">Cost: ${calculateCost()}</Typography>
        </Box>

        <Stack direction="row" spacing={2}>
          <FormControl sx={{width:'50%'}}>
            <InputLabel id="demo-simple-select-label">
              Payment method
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={paymentMethod}
              label="Payment method"
              onChange={(e) => handleChangePaymentMethod(e.target.value)}
            >
              <MenuItem value={"Cash"}>Cash</MenuItem>
              <MenuItem value={"ApplePay"}>Apple Pay</MenuItem>
              <MenuItem value={"PayPal"}>PayPal</MenuItem>
              <MenuItem value={"DiscoverCard"}>Discover Card</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{width:'50%'}}>
          <InputLabel id="discount-label">Discount</InputLabel>
          <Select
            labelId="discount-label"
            value={discountType}
            label="Discount"
            onChange={(e) => setDiscountType(e.target.value as string)}
          >
            <MenuItem value="none">No Discount</MenuItem>
            <MenuItem value="kid">Kid Discount</MenuItem>
            <MenuItem value="veteran">Veteran Discount</MenuItem>
            <MenuItem value="senior">Senior Discount</MenuItem>
            <MenuItem value="gold">Gold Membership</MenuItem>
            <MenuItem value="silver">Silver Membership</MenuItem>
          </Select>
        </FormControl>

          <Button variant="contained" onClick={processPayment}>
            Checkout
          </Button>
        </Stack>
      </Container>
    </>
  );
};

// const App: React.FC = () => {
//   const [condiments, setCondiments] = useState({
//     milk: 0,
//     sugar: 0,
//     vanilla: 0,
//     caramel: 0,
//     whippedCream: 0,
//     chocolate: 0,
//     cinnamon: 0,
//     hazelnut: 0,
//     almondMilk: 0,
//     soyMilk: 0,
//     mocha: 0,
//     irishCream: 0,
//   });

//   const [animate, setAnimate] = useState(false);
//   const [discountStrategy, setDiscountStrategy] = useState<DiscountStrategy>(new NoDiscountStrategy());

//   const incrementCondiment = (condiment: keyof typeof condiments) => {
//     setCondiments((prev) => ({
//       ...prev,
//       [condiment]: prev[condiment] + 1,
//     }));
//     triggerAnimation();
//   };

//   const decrementCondiment = (condiment: keyof typeof condiments) => {
//     setCondiments((prev) => ({
//       ...prev,
//       [condiment]: Math.max(prev[condiment] - 1, 0),
//     }));
//   };

//   const triggerAnimation = () => {
//     setAnimate(true);
//     setTimeout(() => setAnimate(false), 500); // Reset animation state after 500ms
//   };

//   let coffee = new SimpleCoffee();
//   const condimentsList: string[] = [];

//   for (let i = 0; i < condiments.milk; i++) {
//     coffee = new MilkDecorator(coffee);
//     condimentsList.push('Milk');
//   }
//   for (let i = 0; i < condiments.sugar; i++) {
//     coffee = new SugarDecorator(coffee);
//     condimentsList.push('Sugar');
//   }
//   for (let i = 0; i < condiments.vanilla; i++) {
//     coffee = new VanillaDecorator(coffee);
//     condimentsList.push('Vanilla');
//   }
//   for (let i = 0; i < condiments.caramel; i++) {
//     coffee = new CaramelDecorator(coffee);
//     condimentsList.push('Caramel');
//   }
//   for (let i = 0; i < condiments.whippedCream; i++) {
//     coffee = new WhippedCreamDecorator(coffee);
//     condimentsList.push('Whipped Cream');
//   }
//   for (let i = 0; i < condiments.chocolate; i++) {
//     coffee = new ChocolateDecorator(coffee);
//     condimentsList.push('Chocolate');
//   }
//   for (let i = 0; i < condiments.cinnamon; i++) {
//     coffee = new CinnamonDecorator(coffee);
//     condimentsList.push('Cinnamon');
//   }
//   for (let i = 0; i < condiments.hazelnut; i++) {
//     coffee = new HazelnutDecorator(coffee);
//     condimentsList.push('Hazelnut');
//   }
//   for (let i = 0; i < condiments.almondMilk; i++) {
//     coffee = new AlmondMilkDecorator(coffee);
//     condimentsList.push('Almond Milk');
//   }
//   for (let i = 0; i < condiments.soyMilk; i++) {
//     coffee = new SoyMilkDecorator(coffee);
//     condimentsList.push('Soy Milk');
//   }
//   for (let i = 0; i < condiments.mocha; i++) {
//     coffee = new MochaDecorator(coffee);
//     condimentsList.push('Mocha');
//   }
//   for (let i = 0; i < condiments.irishCream; i++) {
//     coffee = new IrishCreamDecorator(coffee);
//     condimentsList.push('Irish Cream');
//   }

//   const discountedCost = discountStrategy.calculateDiscountedCost(coffee.cost());

//   return (
//     <div className="app">
//       <h1>Decorator Pattern with Coffee</h1>
//       <div className="content">
//         <div className="grid">
//           {Object.keys(condiments).map((condiment) => (
//             <div key={condiment} className="grid-item">
//               <span>{condiment.charAt(0).toUpperCase() + condiment.slice(1)}</span>
//               <div className="buttons">
//                 <button onClick={() => incrementCondiment(condiment as keyof typeof condiments)}>+</button>
//                 <span>{condiments[condiment as keyof typeof condiments]}</span>
//                 <button onClick={() => decrementCondiment(condiment as keyof typeof condiments)}>-</button>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* This is the comment  */}
//         <div className={`coffee-display ${animate ? 'animate' : ''}`}>
//           <p>Base: Coffee</p>
//           {condimentsList.length > 0 && (
//             <div>
//               <p>Condiments:</p>
//               {condimentsList.map((condiment, index) => (
//                 <p key={index}>{condiment}</p>
//               ))}
//             </div>
//           )}
//           <p>Cost: ${coffee.cost()}</p>
//           <p>Discounted Cost: ${discountedCost}</p>
//         </div>
//       </div>
//       <div className="discount-options">
//         <button onClick={() => setDiscountStrategy(new NoDiscountStrategy())}>No Discount</button>
//         <button onClick={() => setDiscountStrategy(new KidDiscountStrategy())}>Kid Discount</button>
//         <button onClick={() => setDiscountStrategy(new VeteranDiscountStrategy())}>Veteran Discount</button>
//         <button onClick={() => setDiscountStrategy(new SeniorDiscountStrategy())}>Senior Discount</button>
//         <button onClick={() => setDiscountStrategy(new GoldMembershipDiscountStrategy())}>Gold Membership</button>
//         <button onClick={() => setDiscountStrategy(new SilverMembershipDiscountStrategy())}>Silver Membership</button>
//       </div>
//     </div>
//   );
// };

export default App;
