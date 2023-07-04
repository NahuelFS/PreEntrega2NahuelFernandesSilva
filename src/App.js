import { Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemsListContainer from "./componentes/navbar/ItemsListContainer/ItemsListContainer";
import Navbar from "./componentes/navbar/Navbar";
function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route
                    path='/'
                    element={
                        <ItemsListContainer
                            greeting={
                                "Hola Bienvenidos a PuntoSano Tienda Saludable"
                            }
                        />
                    }
                />
                <Route
                    path='/category/:categoryId'
                    element={<ItemsListContainer />}
                />
                <Route path='/Item/:ItemId' element={<ItemDetailContainer />} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
        </div>
    );
}

export default App;
