import {Route, Routes} from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import NewProducts from "./pages/NewProducts";
import Navbar from "./components/Navbar";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Jewelery from "./pages/Jewelery";
import Electronics from "./pages/Electronics";
import {Home} from "./pages/Home";
import MyCart from "./pages/MyCart";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/all' element={<AllProducts/>}/>
                <Route path='/new' element={<NewProducts/>}/>
                <Route path='/men' element={<Men/>}/>
                <Route path='/women' element={<Women/>}/>
                <Route path='/jewelery' element={<Jewelery/>}/>
                <Route path='/electronics' element={<Electronics/>}/>
                <Route path='/cart' element={<MyCart/>}/>
            </Routes>
        </>
    )
}

export default App;
