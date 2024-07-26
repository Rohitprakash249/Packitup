import React from "react";

function Stats({items }){
    const noOfItems= items.length;
    if(items.length===0){
          return (<footer className="stats">
            <em>start adding some items</em>
          </footer> )
  
    }
  
    const itemspacked = items.filter((item)=> item.packed).length;
    const packedPercent = Math.floor((itemspacked/noOfItems)*100);
    return (<footer className="stats">
      
      
      {packedPercent ===100? <em> ✈️ you got everything you are ready to go.</em>:  <em> You have {noOfItems} items on your list, you have packed {itemspacked} ({packedPercent === 0 ? "0": packedPercent}%)</em> }
      
  
  
      </footer>)
  }
  export default Stats
  