import { CssBaseline, Toolbar } from "@mui/material";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../common/header/Header";
import Tramos from "./tramos/Tramos";
import Clientes from "./clientes/Clientes";
import TramosClientes from "./tramos_clientes/TramosClientes";
import Home from "./home/Home";
import { FilterProvider } from "../../context/FilterContext";

export default function App() {
  return (
    <FilterProvider>
      <BrowserRouter>
        <CssBaseline />
        <Toaster position="bottom-left" toastOptions={{id:"one"}} />
        <Header />
        <Toolbar />
        <Routes >
          <Route  path="/" Component={Home} />
          <Route  path="/tramos" Component={Tramos} />
          <Route path="/clientes" Component={Clientes} />
          <Route path="/tramos_clientes" Component={TramosClientes} />
          <Route path="*" Component={Redirect} />
        </Routes>
      </BrowserRouter>
    </FilterProvider>
  );
}

const Redirect = () =>{
  return <Navigate to="/" replace={true}/>
}