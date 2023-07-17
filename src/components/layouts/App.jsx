import { CssBaseline, Toolbar } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../common/header/Header";
import Tramos from "./tramos/Tramos";
import Clientes from "./clientes/Clientes";
import TramosClientes from "./tramos_clientes/TramosClientes";
import { FilterProvider } from "../../context/FilterContext";

export default function App() {
  return (
    <FilterProvider>
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Toolbar />
        <Routes>
          <Route path="/tramos" Component={Tramos} />
          <Route path="/clientes" Component={Clientes} />
          <Route path="/tramos_clientes" Component={TramosClientes} />
        </Routes>
      </BrowserRouter>
    </FilterProvider>
  );
}
