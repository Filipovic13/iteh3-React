import React from "react";
import OneItem from "./OneItem";

export const Cart = ({ products }) => {
     return (
          <div>
               <h3>This is your cart</h3>
               <div className="items">
                    {products.map((item) => (
                         <OneItem product={item} key={item.id} inCart={1} />
                    ))}
               </div>
          </div>
     );
};
