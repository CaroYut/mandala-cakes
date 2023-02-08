import Destacado from "./components/Destacado";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a Mandala Cakes"} /> 
      <Destacado/>
    </div>
  )
}

export default App;