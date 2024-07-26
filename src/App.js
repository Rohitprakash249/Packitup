import React , {useState}from "react";
import Form from "./components/Form"
import "./index.css"
import Logo from "./components/logo"
import PackingList from "./components/PackingList";
import Stats from "./components/Stats"








function App() {

  function handleClearList(){
    
    setItem([]);
  }
  const [items,setItem] = useState([]);

  function setItemF(item){
    setItem((items)=> ([...items ,item]))
    console.log(items);
  }

  function handleDeleteItem(id){

   
setItem((items) => items.filter((item)=> item.id !== id));

  }

function handleToToggle(id){

setItem((items)=> items.map((item)=> item.id === id?{...item,packed: !item.packed} :item))
}


  return <div className="app"><Logo />
  <Form addOnChange={setItemF}/>
  <PackingList items={items}
  onDeleteItem={handleDeleteItem}
  clicktoToggle={handleToToggle}
  ClearList={handleClearList}
  />
  <Stats items={items} />
  </div>
}
export default App;
