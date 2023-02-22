import ItemDetailContainer from "./components/ItemDetailConteiner";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import {  BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./components/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar/>
            <Routes>    
              <Route path={"/"} element={<ItemListContainer/>} />
              <Route path={"/category/::id"}element={<ItemListContainer/>} />
              <Route path={"/item/::id"} element={<ItemDetailContainer/>} />
              <Route path={"*"} element={<Error404/>} />
            </Routes>    
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;