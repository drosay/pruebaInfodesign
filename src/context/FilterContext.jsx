import { useState, useContext, createContext, useMemo, useEffect } from "react";

const FilterContext = createContext();

function FilterProvider(props) {
  const [filterData, setFilterData] = useState({
    fechainicial: "",
    fechafinal: "",
    mostrarComo: "",
    tramo: "",
    consumption: true,
    losses: true,
    charge: true,
    validDates: false,
  });

  useEffect(() => {
    const { fechainicial, fechafinal } = filterData;
    setFilterData((prev) => ({
      ...prev,
      validDates: (() => {
        if (fechainicial === "" || fechafinal === "") return false;
        if (fechainicial.isAfter(fechafinal)) return false;
        return true;
      })(),
    }));
  }, [filterData.fechainicial, filterData.fechafinal]);

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
