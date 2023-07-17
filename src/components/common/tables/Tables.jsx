import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { COLORS, SIZES } from "../../../constants/constants";
import {
  clientTableColumns,
  tramoTableColumns,
} from "../../../constants/tableColumns";

/* También se puede transformar la data para obtener la id en la DataGrid

const transformData = (data) => {
    return data.map((item, index) => ({
      id: index + 1,
      ...item,
    }));
  };

<DataGrid getRowId={(row) => row.id} />

*/

export const TramoTable = ({ data }) => {
  return (
    data && (
      <Box
        sx={{
          width: { sm: "610px", xs: "95%" },
          mx: "auto",
          mt: { sm: "20px", xs: 0 },
        }}
      >
        <Typography variant="h6" sx={{ color: COLORS.secondary }}>
          Tabla de datos por tramo
        </Typography>
        <DataGrid
          columns={tramoTableColumns}
          rows={data}
          autoHeight
          getRowId={(row) => row.Linea}
          disableRowSelectionOnClick
          disableDensitySelector
          disableColumnSelector
          disableColumnMenu
          density="compact"
          hideFooter
          sx={{
            fontSize: { sm: SIZES.textSM, xs: SIZES.textXS },
          }}
        />
      </Box>
    )
  );
};

export const ClientTable = ({ data }) => {
  return (
    data && (
      <Box
        sx={{
          width: { sm: "610px", xs: "95%" },
          mx: "auto",
          mt: { sm: "20px", xs: 0 },
        }}
      >
        <Typography variant="h6" sx={{ color: COLORS.secondary }}>
          Tabla de datos por clientes
        </Typography>
        <DataGrid
          columns={clientTableColumns}
          rows={data}
          autoHeight
          getRowId={(row) =>
            `${row.Linea}-${row.consumo_residencial}-${row.perdidas_industrial}`
          }
          disableRowSelectionOnClick
          disableDensitySelector
          disableColumnSelector
          disableColumnMenu
          hideFooter
          density="compact"
          sx={{
            fontSize: { sm: SIZES.textSM, xs: SIZES.textXS },
          }}
        />
      </Box>
    )
  );
};
