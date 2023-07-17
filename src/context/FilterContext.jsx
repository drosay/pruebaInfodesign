import { useState, useContext, createContext, useMemo } from "react";
import dayjs from "dayjs";

const FilterContext = createContext();

function FilterProvider(props) {
  const [filterData, setFilterData] = useState({
    fechainicial: dayjs(new Date()),
    fechafinal: dayjs(new Date()),
    mostrarComo: "graph",
    tramo:"",
    consumption: true,
    losses: true,
    charge: true,
  });

  const value = useMemo(
    () => ({
      filterData,
      setFilterData,
    }),
    [filterData]
  );

  return (
    <FilterContext.Provider value={value}>
      {props.children}
    </FilterContext.Provider>
  );
}

function useFilterContext() {
  const context = useContext(FilterContext);

  return context ? context : "You must be inside the FilterContext provider";
}

export { FilterProvider, useFilterContext };
