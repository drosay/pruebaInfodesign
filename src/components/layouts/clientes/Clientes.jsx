import { useEffect, useState } from "react";
import fetch_api from "../../../services/fetch_api";
import { Box, Typography } from "@mui/material";
import { useFilterContext } from "../../../context/FilterContext";
import { makeDatasets } from "../../../helpers/dataFormat";
import { SIZES } from "../../../constants/constants";
import Charts from "../../common/charts/Charts";
import { ClientTable } from "../../common/tables/Tables";
import Filters from "../../common/filters/Filters";

export default function Clientes() {
  const {
    filterData: { mostrarComo, fechainicial, fechafinal, validDates },
  } = useFilterContext();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch_api({
        endpoint: "cliente",
        fechainicial: fechainicial,
        fechafinal: fechafinal,
      });

      if (response?.length) {
        setData(response);
        localStorage.setItem("clienteTableData", JSON.stringify(response));
        localStorage.setItem(
          "clienteGraphData",
          JSON.stringify(makeDatasets(response))
        );
      }
    };
    validDates && getData();
  }, [fechainicial, fechafinal]);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" } }}>
        <Filters title={"Vizualización por tipo de cliente"} />
        {(data?.length !== 0 ||
          localStorage.getItem("clienteTableData") !== null) &&
          (mostrarComo === "table" || mostrarComo === "both") && (
            <ClientTable
              data={
                data?.length !== 0
                  ? data
                  : JSON.parse(localStorage.getItem("clienteTableData"))
              }
            />
          )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          width: "90%",
          m: "10px auto",
        }}
      >
        {data?.length === 0 &&
        localStorage.getItem("clienteGraphData") === null ? (
          <Typography
            sx={{ fontSize: { sm: SIZES.subtitleSM, xs: SIZES.subtitleXS } }}
          >
            Parece que aún no hay datos, por favor cambia los filtros
          </Typography>
        ) : (
          (mostrarComo === "graph" || mostrarComo === "both") && (
            <Charts
              dataSets={
                data?.length !== 0
                  ? makeDatasets(data)
                  : JSON.parse(localStorage.getItem("clienteGraphData"))
              }
            />
          )
        )}
      </Box>
    </>
  );
}
