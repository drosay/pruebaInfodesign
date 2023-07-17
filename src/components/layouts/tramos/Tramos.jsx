import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import fetch_api from "../../../services/fetch_api";
import { SIZES } from "../../../constants/constants";
import { useFilterContext } from "../../../context/FilterContext";
import { dataTramos } from "../../../helpers/dataFormat";
import Charts from "../../common/charts/Charts";
import { TramoTable } from "../../common/tables/Tables";
import Filters from "../../common/filters/Filters";

export default function Tramos() {
  const {
    filterData: { mostrarComo, fechainicial, fechafinal },
  } = useFilterContext();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch_api({
        endpoint: "tramos",
        fechainicial: fechainicial,
        fechafinal: fechafinal,
      });

      if (response?.length) {
        setData(response);
        localStorage.setItem("tramoTableData", JSON.stringify(response));
        localStorage.setItem(
          "tramoGraphData",
          JSON.stringify(dataTramos(response))
        );
      }
    };
    getData();
  }, [fechainicial, fechafinal]);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" } }}>
        <Filters title={"Vizualización por tramos"} />
        {(data?.length !== 0 ||
          localStorage.getItem("tramoTableData") !== null) &&
          (mostrarComo === "table" || mostrarComo === "both") && (
            <TramoTable
              data={
                data?.length !== 0
                  ? data
                  : JSON.parse(localStorage.getItem("tramoTableData"))
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
        localStorage.getItem("tramoGraphData") === null ? (
          <Typography
            sx={{ fontSize: { sm: SIZES.subtitleSM, xs: SIZES.subtitleXS } }}
          >
            Parece que aún no hay datos, por favor cambia los filtros
          </Typography>
        ) : (
          (mostrarComo === "graph" || mostrarComo === "both") && (
            <Charts
              data={
                data?.length !== 0
                  ? dataTramos(data)
                  : JSON.parse(localStorage.getItem("tramoGraphData"))
              }
              indexAxis="y"
            />
          )
        )}
      </Box>
    </>
  );
}
