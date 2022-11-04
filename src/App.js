import "./App.css";
import NavBar from "./components/NavBar";
import Items from "./components/Items";
import { Cart } from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
     //let cartNum = 0;
     const [cartNum, increaseCartNum] = useState(0);
     const [cartItems, addToCart] = useState([]);
     const [products] = useState([
          {
               id: 1,
               name: "T-Shirt",
               price: "1.500 RSD",
               image: "https://krav-maga.hr/upload/catalog/product/112/bijela-pa439-_58b06143658c5.jpg",
               amount: 0,
          },
          {
               id: 2,
               name: "Hoodie with zip",
               price: "3.500 RSD",
               image: "https://krav-maga.hr/upload/catalog/product/131/fuji-crna_599af9e293cf9.jpg",
               amount: 0,
          },
          {
               id: 3,
               name: "Braclet",
               price: "450 RSD",
               image: "https://www.kmgshop.com/wp-content/uploads/2013/06/Bracelet-Product.jpg?v=9ee9d85a86f0",
               amount: 0,
          },
     ]);
     function refreshCart() {
          let newItems = products.filter((prod) => prod.amount > 0);
          addToCart(newItems);
     }
     function addItem(name, id) {
          console.log("Dodat proizvod: " + name);
          increaseCartNum(cartNum + 1);
          // console.log(cartNum);
          products.forEach((prod) => {
               if (prod.id === id) {
                    prod.amount++;
               }
          });
          refreshCart();
     }

     return (
          <BrowserRouter className="App">
               <NavBar cartNum={cartNum} />
               <Routes>
                    <Route
                         path="/"
                         element={
                              <Items products={products} addItem={addItem} />
                         }
                    />
                    <Route
                         path="/cart"
                         element={<Cart products={cartItems} />}
                    />
               </Routes>
          </BrowserRouter>
     );
}

export default App;
