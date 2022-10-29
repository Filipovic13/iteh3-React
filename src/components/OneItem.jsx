import React from "react";
import { GoPlus } from "react-icons/go";

function OneItem({ product, addItem }) {
     return (
          <div className="card">
               <img src={product.image} alt="ItemPhoto" />

               <div className="infoWrapper">
                    <div className="cardNamePrice">
                         <h3>{product.name}</h3>
                         <h3>{product.price}</h3>
                    </div>

                    <hr className="hr" />

                    <div className="cardAdd">
                         <h3>Quick add</h3>
                         <button onClick={() => addItem(product.name)}>
                              <GoPlus />
                         </button>
                    </div>
               </div>
          </div>
     );
}

export default OneItem;
