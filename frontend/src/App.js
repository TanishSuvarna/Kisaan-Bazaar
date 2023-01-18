import io from "socket.io-client";
import { useEffect, useState } from "react";
import { ReactDOM } from "react";
import { Route, Routes } from "react-router-dom";
import SellerDashboard from "./components/SellerDashboard";
import SellProduct from "./components/SellProduct";
import SellerNavbar from "./components/SellerNavbar";
import SellerProfile from "./components/SellerProfile";
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import LandingPage from './components/LandingPage.js'
import { PrivateRoutes } from "./helpers/privateRoutes.js";
import Products from "./components/Products.js";
function App() {
  // const [socket, setSocket] = useState(null);
  // const [num , setNum] = useState(0);
  // const [visual , setVisual] = useState(0);
  // useEffect(() => {
  //   setSocket(io("http://localhost:5000"));
  // }, []);

  // if(socket){
  //   socket.on("connect" , () => {
  //     socket.emit("testing" , `Hey i Am ${socket.id}`)
  //     socket.on("updatedNumVal" , (data) =>{
  //       console.log(data);
  //       setVisual(data)
  //     });
  //   })
  // }

  // const handleChange = (e) =>{
  //   setNum(e.target.value);
  //   socket.emit("updatedNumVal" , e.target.value);
  // }
  return (
    <BrowserRouter>
    {/* <SellerNavbar></SellerNavbar>

<Routes>
  <Route path="/" element={<SellerProfile />}></Route>
  <Route path="/SellProduct" element={<SellProduct />}></Route>
</Routes> */}
      <Routes>
      <Route path = "/" exact element={<LandingPage/>}/><Route/>
      <Route element ={<PrivateRoutes/>}> 
              <Route path = "/products" element={<Products/>}/><Route/>
          </Route>
        </Routes>   
    </BrowserRouter>
  );
}

export default App;
