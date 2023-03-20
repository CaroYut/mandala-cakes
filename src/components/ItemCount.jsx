import {useEffect , useState} from "react";
import {Link} from "react-router-dom"

const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState (1);  
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setitemAdded] = useState (false);

const incrementarStock = () => {
   if (items < itemStock) {
    setItems(items + 1);
  }
}
   const decrementarStock = () => { 
  if (items > 1) {
    setItems (items - 1);
  }
}

const addToCart = () => {
    if (itemStock > items) {
        setItemStock(itemStock - items);
        setItems(1);
        console.log("Agregaste:" + items + "Productos al Carrito!");
        setitemAdded(true);
        onAdd(items);
    }
  
}

useEffect(() => {
    setItemStock(stock);
}, [stock]);

    return (
    <div className="container">
         <div className="row">
            <div className="col">
                <div className="btn-group">
                    <button className="btn btn-outline-primary" onClick={decrementarStock}>-</button>
                    <button className="btn btn-outline-primary" > {items} </button>
                    <button className="btn btn-outline-primary" onClick={incrementarStock}>+</button>
                </div>
            </div>
        </div>
        <div className="row my-1">
            <div className="col">
            {itemAdded ? <Link to= {"/cart"} className="btn btn-warning"> Terminar mi compra </Link> : <button className="btn btn-outline-primary" onClick={addToCart}> Agregar al carrito</button>}
             </div> 
        </div>
     </div>

)
}

export default ItemCount; 