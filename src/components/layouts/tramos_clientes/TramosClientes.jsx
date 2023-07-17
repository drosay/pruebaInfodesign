import { Box } from "@mui/material";
import { PaginationTable } from "../../common/tables/PaginationTable";
import Filters from "../../common/filters/Filters";

export default function TramosClientes() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: { sm: "row", xs: "column" } }}>
        <Box>
          <Filters title={"Vizualización pérdidas por tramo"} type={2} />
        </Box>
        <PaginationTable />
      </Box>
    </>
  );
}
