import "./App.css";
import NavBar from "./components/NavBar";
import Items from "./components/Items";
import { useState } from "react";

function App() {
     //let cartNum = 0;
     const [cartNum, addInCart] = useState(0);
     const products = [
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
     ];
     function addItem(name) {
          console.log("Dodat proizvod: " + name);
          addInCart(cartNum + 1);
          console.log(cartNum);
     }
     return (
          <div className="App">
               <NavBar cartNum={cartNum} />
               <Items products={products} addItem={addItem} />
          </div>
     );
}

export default App;
