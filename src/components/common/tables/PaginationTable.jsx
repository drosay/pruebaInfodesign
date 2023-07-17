import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { COLORS, SIZES } from "../../../constants/constants";
import fetch_api from "../../../services/fetch_api";
import { useFilterContext } from "../../../context/FilterContext";
import { tramoClientTableColumns } from "../../../constants/tableColumns";

export const PaginationTable = () => {
  const {
    filterData: { fechainicial, fechafinal, tramo },
  } = useFilterContext();

  const [pageState, setPageState] = useState({
    isLoading: false,
    data: [],
    registros: 0,
    paginationModel: { page: 0, pageSize: 5 },
  });

  useEffect(() => {
    const getData = async () => {
      setPageState((prev) => ({ ...prev, isLoading: true }));

      const response = await fetch_api({
        endpoint: "tramosHist",
        fechainicial: fechainicial,
        fechafinal: fechafinal,
        body: {
          offset:
            pageState?.paginationModel?.pageSize *
            (pageState?.paginationModel?.page + 1 || 0),
          limit: pageState?.paginationModel?.pageSize || 5,
          tramo: tramo || "Tramo 1",
        },
      });

      setPageState((prev) => ({
        ...prev,
        registros: response.registros,
        data: response.datos,
        isLoading: false,
      }));
    };
    getData();
  }, [
    fechainicial,
    fechafinal,
    tramo,
    pageState?.paginationModel?.page,
    pageState?.paginationModel?.pageSize,
  ]);

  const handlePaginationModelChange = ({ page, pageSize }) => {
    console.log(pageState);
    setPageState((prev) => ({ ...prev, paginationModel: { page, pageSize } }));
  };

  return (
    <Box
      sx={{
        width: { sm: "420px", xs: "95%" },
        mx: "auto",
        mt: { sm: "20px", xs: 0 },
      }}
    >
      <Typography variant="h6" sx={{ color: COLORS.secondary }}>
        Tabla de pérdidas por tramo
      </Typography>
      <DataGrid
        autoHeight
        rows={pageState.data}
        rowCount={pageState.registros}
        loading={pageState.isLoading}
        pageSizeOptions={[5, 10, 20, 100]}
        pagination
        paginationModel={pageState.paginationModel}
        onPaginationModelChange={handlePaginationModelChange}
        paginationMode="server"
        columns={tramoClientTableColumns}
        getRowId={(row) => `${row.Linea}-${row.TipoConsumo}-${row.Perdidas}`}
        sx={{
          fontSize: { sm: SIZES.textSM, xs: SIZES.textXS },
        }}
      />
    </Box>
  );
};
