import React,{useState} from "react";
import Item from "./Item"

function PackingList({items , onDeleteItem ,clicktoToggle , ClearList}){

    const [sortBy , setSortBy]= useState("input");
  var sorteditems;
  
  if(sortBy==="input") sorteditems =items;
  
  if(sortBy==="description") sorteditems = items.slice().sort((a,b) => a.description.localeCompare(b.description))
   
    if(sortBy==="packed") sorteditems = items.slice().sort((a,b) => Number(a.packed)-Number(b.packed));
   
   
    function setSort(event){
    setSortBy(event.target.value);
    console.log(event.target.value);
   }
    return <div className="list"><ul >
      {sorteditems.map((item)=>
     <Item item={item} onDeleteItem={onDeleteItem} clicktoToggle={clicktoToggle}
     key={item.id} />
  )}
  
  
  
  </ul>
  
  <div className="actions">
  <select value={sortBy} onChange={setSort}> 
  <option value="input">sory by input order</option>
  <option value="description">sory by description</option>
  <option value="packed">sort by packed status</option>
  
  
  </select>
  <button onClick={ClearList}>Clear List</button>
  
  </div>
  
  </div>
  }
  export default PackingList