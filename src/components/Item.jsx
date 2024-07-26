import React from "react";
function Item({item, onDeleteItem , clicktoToggle}){
  
    return <li>
      <input type="checkBox" value={item.packed} onChange={()=>clicktoToggle(item.id)} ></input>
      <span style={item.packed ? {textDecoration:"line-through"}:{}}>{item.quantity }{item.description}</span>
    <button onClick={() => onDeleteItem(item.id)}>❌</button></li>
  }
  
  // function createitem(x){
  //   return <Item item={x.description}/>
  // }
  
export default Item  