import React,{useState} from "react";

function Form({addOnChange}){
    const [qty,setQty]= useState(1);
  const [description,setDescription] = useState("");
  
  
  function handleChange(event){
    setDescription(event.target.value);
  
  }
  
  
    function handleSubmit(event){
    event.preventDefault();
    if (!description) return;
    const newItem={ quantity: qty ,description:description , packed: false , id:Date.now()}
  // console.log(newItem);
  setDescription("");
  addOnChange(newItem);
  
    }
    function quantitysetter(event){
      setQty(Number(event.target.value));
      console.log(Number(event.target.value))
    }
  return (<form className="add-form" onSubmit={handleSubmit}>
    <h3>what do you need for your trip?</h3>
    <select onChange={quantitysetter}>
    {Array.from({length:20},(_,i)=> i+1).map((num)=>(<option value={num} key={num}> 
  {num} 
  </option>))} 
    </select>
    <input onChange={handleChange} type="text" placeholder="Item..." value={description}/>
    <button>Add</button>
  </form>)
  }
export default Form  