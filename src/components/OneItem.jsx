import React from "react";
import { GoPlus } from "react-icons/go";

function OneItem() {
     return (
          <div className="card">
               <img src="https:/picsum.photos/350" alt="item" />
               <div className="cardNamePrice">
                    <h3>Item name</h3>
                    <h3>1.000 RSD</h3>
               </div>
               <hr className="hr" />
               <div className="cardAdd">
                    <h3>Quick add</h3>
                    <h3>
                         <GoPlus />
                    </h3>
               </div>
          </div>
     );
}

export default OneItem;
