import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { customInstance } from "./axios";
// import TokenVerify from "../../Hooks/tokenVerify";
export const PrivateRoutes = () => {
    useEffect(() =>{
        const axios = customInstance();
        const f = async() => {
            try{
                console.log("heyyy")
                await axios.post("/user/verify");
                return  <Outlet/>
            }
            catch(err){
                localStorage.setItem("token", null);
                localStorage.setItem("user",null);
                return <Navigate to ="/LandingPage"/>
            }
        }
        f();
    },[])
} 

