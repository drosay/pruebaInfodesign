import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import { useFilterContext } from "../../../context/FilterContext";

export default function DateFilter() {
  const {
    filterData: { fechainicial, fechafinal },
    setFilterData,
  } = useFilterContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "140px",
          width: { sm: "240px", xs: "60%" },
          justifyContent: "space-between",
        }}
      >
        <DatePicker
          disableFuture
          label="Fecha inicial"
          openTo="year"
          views={["year", "month", "day"]}
          value={fechainicial}
          minDate={dayjs("2010-01-01")}
          maxDate={dayjs(new Date())}
          closeOnSelect
          onChange={(date) => {
            setFilterData((prev) => ({ ...prev, fechainicial: dayjs(date) }));
          }}
        />
        <DatePicker
          disableFuture
          label="Fecha final"
          openTo="year"
          views={["year", "month", "day"]}
          value={fechafinal}
          minDate={fechainicial}
          maxDate={dayjs(new Date())}
          closeOnSelect
          onChange={(date) => {
            setFilterData((prev) => ({ ...prev, fechafinal: dayjs(date) }));
          }}
        />
      </Box>
    </LocalizationProvider>
  );
}
