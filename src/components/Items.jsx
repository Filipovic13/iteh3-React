import React from "react";
import OneItem from "./OneItem";

const Items = ({ products, addItem }) => {
     return (
          <div className="items">
               {products.map((item) => (
                    <OneItem product={item} key={item.id} addItem={addItem} />
               ))}
               {/* {products.map((item) => {
                    return <OneItem product={item} />;
               })} */}
               {/* <OneItem product={products[0]} />
               <OneItem product={products[1]} />
               <OneItem product={products[2]} /> */}
          </div>
     );
};

export default Items;
